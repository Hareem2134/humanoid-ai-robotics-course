
# RAG Chatbot Backend

This directory contains the backend for the RAG chatbot. It is built with FastAPI and uses a Neon Serverless Postgres database, and Qdrant Cloud for vector storage.

## Setup

1.  **Install Dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

2.  **Configure Environment Variables:**
    Create a `.env` file in this directory and add the following environment variables:
    ```
    OPENAI_API_KEY=your_openai_api_key_here
    NEON_DATABASE_URL=your_neon_postgres_database_url_here
    QDRANT_URL=your_qdrant_cloud_url_here
    QDRANT_API_KEY=your_qdrant_api_key_here
    ```

3.  **Run the Ingestion Script:**
    This script will load the book content, create embeddings, and store them in Qdrant and Postgres.
    ```bash
    python scripts/ingestion_script.py
    ```

## Usage

To run the backend server, use the following command:
```bash
uvicorn src.main:app --reload
```
The server will be available at `http://127.0.0.1:8000`.
