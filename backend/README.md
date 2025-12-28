# Backend Service for RAG Chatbot

This directory contains the FastAPI backend for the Humanoid AI & Robotics Textbook's RAG (Retrieval-Augmented Generation) chatbot.

## Quickstart

### 1. Environment Setup

This project uses Python 3.9+. It is recommended to use a virtual environment.

```bash
# Create a virtual environment
python -m venv .venv

# Activate the virtual environment
# On Windows
.venv\Scripts\activate
# On macOS/Linux
source .venv/bin/activate
```

### 2. Install Dependencies

Install the required Python packages from `requirements.txt`.

```bash
pip install -r requirements.txt
```

### 3. Environment Variables

The backend requires several environment variables for configuration, including database credentials and API keys.

- Copy the example `.env.example` file to a new file named `.env`:
  ```bash
  cp .env.example .env
  ```
- Open the `.env` file and add your specific credentials for the following:
  - `SECRET_KEY`: A strong, unique secret key for signing JWTs.
  - `DATABASE_URL`: The connection string for your PostgreSQL database.
  - `QDRANT_URL`: The URL for your Qdrant vector database instance.
  - `QDRANT_API_KEY`: The API key for your Qdrant instance.
  - `OPENAI_API_KEY`: Your API key for the OpenAI service.

### 4. Data Ingestion

The RAG model relies on a vector database populated with the textbook's content. A script is provided to handle this ingestion process.

- **Important**: Before running, ensure your Qdrant instance is running and accessible.
- Run the ingestion script:
  ```bash
  python -m scripts.ingestion_script
  ```
  This will process the source documents, create embeddings, and store them in the Qdrant collection specified in the script (default: `ai_robotics_textbook`).

### 5. Running the Application

Once the setup is complete, you can start the FastAPI server using Uvicorn.

```bash
uvicorn src.main:app --host 0.0.0.0 --port 8000 --reload
```

The API will be available at `http://localhost:8000`.