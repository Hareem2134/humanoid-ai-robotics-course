import os
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("NEON_DATABASE_URL")
if not DATABASE_URL:
    raise ValueError("NEON_DATABASE_URL environment variable not set.")

async_engine = create_async_engine(DATABASE_URL)
AsyncSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=async_engine, class_=AsyncSession)
Base = declarative_base()

async def get_db():
    async with AsyncSessionLocal() as session:
        yield session

async def create_tables():
    """
    Creates the database tables if they don't exist.
    """
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)