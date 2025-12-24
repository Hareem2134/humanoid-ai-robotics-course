from src.core.database import create_tables
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv() 

if __name__ == "__main__":
    print("Creating database tables...")
    try:
        create_tables()
        print("Database tables created successfully.")
    except Exception as e:
        print(f"Error creating tables: {e}")
