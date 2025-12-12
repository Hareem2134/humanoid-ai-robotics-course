import os
import psycopg2
from dotenv import load_dotenv

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
