import os
import argparse
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import DirectoryLoader
from langchain_community.vectorstores import Qdrant as LangchainQdrant
from qdrant_client import QdrantClient
from langchain_openai import OpenAIEmbeddings
import psycopg2
from dotenv import load_dotenv

load_dotenv()

# --- Database and Client Initialization ---

def get_db_connection():
    """Establishes a connection to the Neon Postgres database."""
    conn = psycopg2.connect(os.getenv("NEON_DATABASE_URL"))
    return conn

def get_qdrant_client():
    """Initializes the Qdrant client."""
    client = QdrantClient(
        url=os.getenv("QDRANT_URL"), 
        api_key=os.getenv("QDRANT_API_KEY"),
    )
    return client

# --- Data Ingestion Logic ---

def ingest_data(docs_path: str):
    """
    Reads markdown files, chunks content, generates embeddings,
    and stores them in Qdrant and Neon.
    """
    # 1. Load documents
    print(f"Loading documents from: {docs_path}")
    loader = DirectoryLoader(docs_path, glob="**/*.md", show_progress=True)
    documents = loader.load()
    print(f"Loaded {len(documents)} documents.")

    # 2. Chunk documents
    print("Chunking documents...")
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    texts = text_splitter.split_documents(documents)
    print(f"Created {len(texts)} chunks.")

    # 3. Initialize Qdrant and store embeddings
    print("Initializing Qdrant and storing embeddings...")
    qdrant_client = get_qdrant_client()
    embeddings = OpenAIEmbeddings()
    qdrant = LangchainQdrant(
        client=qdrant_client,
        collection_name="ai_robotics_textbook",
        embeddings=embeddings,
    )
    qdrant.add_documents(texts)
    print("Embeddings stored in Qdrant.")

    # 4. Store metadata in Neon
    print("Storing metadata in Neon...")
    conn = get_db_connection()
    cur = conn.cursor()

    # Create table if it doesn't exist
    cur.execute("""
        CREATE TABLE IF NOT EXISTS textbook_content (
            id SERIAL PRIMARY KEY,
            file_path TEXT NOT NULL,
            chunk_content TEXT NOT NULL
        );
    """)

    # Insert data
    for text in texts:
        cur.execute(
            "INSERT INTO textbook_content (file_path, chunk_content) VALUES (%s, %s)",
            (text.metadata.get('source'), text.page_content)
        )

    conn.commit()
    cur.close()
    conn.close()
    print("Metadata stored in Neon.")

# --- Main Execution ---

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Ingest markdown files into Qdrant and Neon.")
    parser.add_argument("docs_path", type=str, help="Path to the directory containing markdown files.")
    args = parser.parse_args()

    ingest_data(args.docs_path)
