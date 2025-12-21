import os
import glob
import re
from pathlib import Path
from dotenv import load_dotenv
import uuid
import json # Import json for reading _category_.json files

from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from qdrant_client import QdrantClient, models

# Import from core modules
from src.core.qdrant import get_qdrant_client
from src.core.openai import get_openai_client
from src.core.database import get_db_connection, create_knowledge_base_table, insert_chunk

# Load environment variables
load_dotenv()

# --- Configuration ---
DOCS_DIR = Path("../frontend/docusaurus-site/docs").resolve()
COLLECTION_NAME = "ai_robotics_textbook" # Should match the one in rag_service.py
QDRANT_VECTOR_SIZE = 1536 # OpenAI embeddings default size

# --- Helper Functions ---
def clean_markdown(text):
    """
    Cleans markdown text by removing Docusaurus-specific syntax and
    unwanted markdown elements.
    """
    # Remove Docusaurus _category_.json links
    text = re.sub(r'\[.*?\]\(_category_\.json\)', '', text)
    # Remove image markdown
    text = re.sub(r'!\\\[.*?\\]\(.*?\)', '', text)
    # Remove admonitions (:::info ... :::)
    text = re.sub(r':::[a-z]+\s*[\s\S]*?:::', '', text)
    # Remove HTML comments
    text = re.sub(r'<!--[\s\S]*?-->', '', text)
    # Remove multiple newlines
    text = re.sub(r'\n\s*\n', '\n\n', text)
    return text.strip()

def get_document_chunks_with_metadata(file_path: Path):
    """
    Reads a markdown file, extracts its content, and
    generates chunks with associated metadata.
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    cleaned_content = clean_markdown(content)
    
    # Initialize text splitter
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len,
        is_separator_regex=False,
    )
    
    chunks_raw = text_splitter.split_text(cleaned_content)

    relative_path = file_path.relative_to(DOCS_DIR)
    path_parts = relative_path.parts

    # Infer metadata from path structure
    textbook_id = "HUMANOID_AI_ROBOTICS_TEXTBOOK_ID" # Static for now
    chapter_id = None
    chapter_title = "N/A"
    section_id = None
    section_title = "N/A"
    order_in_section = 0
    
    # Assuming docs structure: 01-chapter-name/01-section-name.md
    if len(path_parts) >= 1 and path_parts[0] != '_category_.json':
        chapter_dir = path_parts[0]
        chapter_id = str(uuid.uuid5(uuid.NAMESPACE_URL, chapter_dir))
        
        # Try to get chapter title from _category_.json
        category_json_path = DOCS_DIR / chapter_dir / "_category_.json"
        if category_json_path.exists():
            try:
                with open(category_json_path, 'r', encoding='utf-8') as cat_f:
                    category_data = json.load(cat_f)
                    chapter_title = category_data.get('label', chapter_dir)
            except json.JSONDecodeError:
                pass # Fallback to chapter_dir if JSON is malformed
        else:
            chapter_title = chapter_dir.replace('-', ' ').title() # Basic title from folder name

    if len(path_parts) >= 2 and file_path.stem != '_category_': # Avoid _category_.json content
        section_id = str(uuid.uuid5(uuid.NAMESPACE_URL, file_path.stem))
        section_title = file_path.stem.replace('-', ' ').title()
        
        # Attempt to get order from filename (e.g., "01-introduction.md")
        match = re.match(r'(\d+)-.*', file_path.stem)
        if match:
            order_in_section = int(match.group(1))

    chunks_with_metadata = []
    for i, chunk_text in enumerate(chunks_raw):
        # Create a unique ID for each chunk
        chunk_uuid = uuid.uuid5(uuid.NAMESPACE_URL, f"{file_path.stem}-{i}-{chunk_text[:50]}")
        
        metadata = {
            "textbook_id": textbook_id,
            "chapter_id": chapter_id,
            "chapter_title": chapter_title,
            "section_id": section_id,
            "section_title": section_title,
            "order_in_section": order_in_section + i, # Increment order for sub-chunks
            "source_file": str(relative_path),
            "url": f"/docs/{relative_path.with_suffix('')}", # Docusaurus URL convention
            "chunk_index": i,
            "chunk_id": str(chunk_uuid) # Stored as string in Qdrant metadata
        }
        
        chunks_with_metadata.append({
            "text_content": chunk_text,
            "metadata": metadata,
            "chunk_uuid": chunk_uuid # Keep UUID object for Postgres insertion
        })
    return chunks_with_metadata

def main():
    if not DOCS_DIR.exists():
        print(f"Error: Documentation directory not found at {DOCS_DIR}")
        return

    print(f"Starting data ingestion from {DOCS_DIR}...")
    
    # 1. Initialize Clients
    try:
        qdrant_client_instance = get_qdrant_client()
        openai_client_instance = get_openai_client() # Used for embeddings implicitly by OpenAIEmbeddings
        db_connection = get_db_connection()
        print("Clients initialized successfully.")
    except ValueError as e:
        print(f"Configuration Error: {e}")
        return
    except Exception as e:
        print(f"Failed to initialize clients: {e}")
        return

    embeddings_model = OpenAIEmbeddings(openai_api_key=os.getenv("OPENAI_API_KEY"))

    # 2. Create Qdrant collection if it doesn't exist
    qdrant_client_instance.recreate_collection(
        collection_name=COLLECTION_NAME,
        vectors_config=models.VectorParams(size=QDRANT_VECTOR_SIZE, distance=models.Distance.COSINE),
    )
    print(f"Qdrant collection '{COLLECTION_NAME}' ensured.")

    # 3. Create Postgres knowledge_base table if it doesn't exist
    create_knowledge_base_table()
    print("Postgres 'knowledge_base' table ensured.")

    markdown_files = glob.glob(str(DOCS_DIR / "**/*.md"), recursive=True)
    
    total_qdrant_points_upserted = 0
    total_postgres_records_inserted = 0

    for md_file in markdown_files:
        if Path(md_file).name == '_category_.json': # Skip category JSON files
            continue
        
        chunks_for_file = get_document_chunks_with_metadata(Path(md_file))
        
        if not chunks_for_file:
            print(f"Skipping {md_file}: No processable content found.")
            continue

        points = []
        with db_connection.cursor() as cur:
            for chunk_data in chunks_for_file:
                chunk_text = chunk_data["text_content"]
                metadata = chunk_data["metadata"]
                chunk_uuid = chunk_data["chunk_uuid"]

                # Generate embedding
                embedding = embeddings_model.embed_query(chunk_text)

                # Prepare point for Qdrant
                points.append(
                    models.PointStruct(
                        id=str(chunk_uuid), # Qdrant ID should be string
                        vector=embedding,
                        payload=metadata,
                    )
                )

                # Store in Postgres
                cur.execute("""
                    INSERT INTO knowledge_base (chunk_id, text_content, textbook_id, chapter_id, section_id, order_in_section)
                    VALUES (%s, %s, %s, %s, %s, %s)
                    ON CONFLICT (chunk_id) DO UPDATE SET
                        text_content = EXCLUDED.text_content,
                        textbook_id = EXCLUDED.textbook_id,
                        chapter_id = EXCLUDED.chapter_id,
                        section_id = EXCLUDED.section_id,
                        order_in_section = EXCLUDED.order_in_section;
                """, (chunk_uuid, chunk_text, metadata["textbook_id"], metadata["chapter_id"], metadata["section_id"], metadata["order_in_section"]))
                total_postgres_records_inserted += 1
            
            db_connection.commit() # Commit after all inserts for the file

        # Upsert points to Qdrant
        if points:
            operation_info = qdrant_client_instance.upsert(
                collection_name=COLLECTION_NAME,
                wait=True,
                points=points
            )
            total_qdrant_points_upserted += len(points)
            print(f"Processed {md_file}: Upserted {len(points)} chunks to Qdrant. Status: {operation_info.status.name}")
        else:
            print(f"Processed {md_file}: No chunks to upsert to Qdrant.")
        
    db_connection.close()
    print(f"\nData ingestion complete!")
    print(f"Total chunks stored in Qdrant: {total_qdrant_points_upserted}")
    print(f"Total records inserted/updated in Postgres: {total_postgres_records_inserted}")

if __name__ == "__main__":
    main()