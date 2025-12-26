from src.core.database import create_tables
from dotenv import load_dotenv
import os
import asyncio # Import asyncio

# Load environment variables from .env file
load_dotenv() 

if __name__ == "__main__":
    print("Creating database tables...")
    try:
        asyncio.run(create_tables()) # Call async function
        print("Database tables created successfully.")
    except Exception as e:
        print(f"Error creating tables: {e}")
