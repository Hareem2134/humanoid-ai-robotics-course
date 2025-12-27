import os
import uuid
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
from .models.conversation import Conversation, Message
from .models.user import User

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

async def create_conversation() -> uuid.UUID:
    """
    Creates a new conversation and returns its ID.
    """
    async with AsyncSessionLocal() as session:
        async with session.begin():
            conversation = Conversation()
            session.add(conversation)
            await session.commit()
            await session.refresh(conversation)
            return conversation.id

async def insert_message(conversation_id: uuid.UUID, sender: str, content: str):
    """
    Inserts a new message into a conversation.
    """
    async with AsyncSessionLocal() as session:
        async with session.begin():
            message = Message(
                conversation_id=conversation_id,
                sender=sender,
                content=content
            )
            session.add(message)
            await session.commit()