import os
from qdrant_client import QdrantClient
from dotenv import load_dotenv

load_dotenv()

QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")

def get_qdrant_client():
    """
    Initializes and returns a Qdrant client.

    Returns:
        QdrantClient: An initialized Qdrant client instance.
    """
    if not QDRANT_URL:
        raise ValueError("QDRANT_URL environment variable not set.")
    if not QDRANT_API_KEY:
        raise ValueError("QDRANT_API_KEY environment variable not set.")
    client = QdrantClient(
        url=QDRANT_URL, 
        api_key=QDRANT_API_KEY,
    )
    return client
