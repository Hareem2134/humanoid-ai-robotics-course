import os
import psycopg2
from dotenv import load_dotenv
import uuid

load_dotenv()

DATABASE_URL = os.getenv("NEON_DATABASE_URL")

def get_db_connection():
    """
    Establishes a connection to the Neon Postgres database.

    Returns:
        psycopg2.connection: A connection object to the database.
    """
    if not DATABASE_URL:
        raise ValueError("NEON_DATABASE_URL environment variable not set.")
    conn = psycopg2.connect(DATABASE_URL)
    return conn

def create_knowledge_base_table():
    """
    Creates the knowledge_base table in the database if it doesn't exist.
    """
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS knowledge_base (
            chunk_id UUID PRIMARY KEY,
            text_content TEXT NOT NULL,
            textbook_id UUID,
            chapter_id UUID,
            section_id UUID,
            order_in_section INTEGER,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    """)
    conn.commit()
    cur.close()
    conn.close()

def insert_chunk(text_content, textbook_id=None, chapter_id=None, section_id=None, order_in_section=None):
    """
    Inserts a text chunk into the knowledge_base table.
    """
    conn = get_db_connection()
    cur = conn.cursor()
    chunk_id = uuid.uuid4()
    cur.execute("""
        INSERT INTO knowledge_base (chunk_id, text_content, textbook_id, chapter_id, section_id, order_in_section)
        VALUES (%s, %s, %s, %s, %s, %s);
    """, (chunk_id, text_content, textbook_id, chapter_id, section_id, order_in_section))
    conn.commit()
    cur.close()
    conn.close()
    return chunk_id
