# Quickstart Guide: Physical AI & Humanoid Robotics Textbook

This guide provides instructions to quickly set up and run the Docusaurus frontend and FastAPI backend for the Physical AI & Humanoid Robotics Textbook project.

## Prerequisites

*   **Node.js**: v18 or higher (for Docusaurus).
*   **Python**: v3.10 or higher (for FastAPI).
*   **Docker** (Optional, recommended for local database setup).
*   **Git**.
*   **OpenAI API Key**: Required for the RAG Chatbot.
*   **Neon Postgres Database URL**: Required for the RAG Chatbot.
*   **Qdrant Cloud API Key & URL**: Required for the RAG Chatbot.

## 1. Clone the Repository

```bash
git clone <repository_url>
cd humanoid-ai-robotics-course
```

## 2. Frontend Setup (Docusaurus)

Navigate to the frontend directory and install dependencies.

```bash
cd frontend/docusaurus-site
npm install
```

### Run Docusaurus Locally

```bash
npm start
```

This will start the Docusaurus development server, usually accessible at `http://localhost:3000`.

### Build Docusaurus for Deployment

```bash
npm run build
```

This command generates static content in the `build` directory, ready for deployment to GitHub Pages.

## 3. Backend Setup (FastAPI)

Navigate to the backend directory and set up the Python environment.

```bash
cd backend
python -m venv .venv
.\.venv\Scripts\activate # On Windows
# source ./.venv/bin/activate # On macOS/Linux
pip install -r requirements.txt
```

### Environment Variables

Create a `.env` file in the `backend` directory with the following:

```
OPENAI_API_KEY="your_openai_api_key"
NEON_DATABASE_URL="your_neon_postgres_connection_string"
QDRANT_API_KEY="your_qdrant_cloud_api_key"
QDRANT_URL="your_qdrant_cloud_url"
```

### Run FastAPI Locally

```bash
uvicorn src.api.main:app --reload
```

This will start the FastAPI server, usually accessible at `http://localhost:8000`. The API documentation will be available at `http://localhost:8000/docs`.

## 4. Initial Data Ingestion (for RAG Chatbot)

Before the RAG chatbot can answer questions, the textbook content needs to be processed and indexed.

```bash
python scripts/ingest_data.py frontend/docusaurus-site/docs
```

This script will:
1.  Read markdown files from the Docusaurus `docs` directory.
2.  Chunk the content.
3.  Generate embeddings using OpenAI.
4.  Store text chunks and metadata in Neon Postgres (KnowledgeBase).
5.  Store vector embeddings in Qdrant (VectorStore).

## 5. Deployment

### Frontend (GitHub Pages)

The Docusaurus `build` output can be deployed to GitHub Pages. Refer to the [Docusaurus deployment guide for GitHub Pages](https://docusaurus.io/docs/deployment#github-pages) for detailed instructions.

### Backend (FastAPI)

The FastAPI application can be deployed to a serverless container platform. Refer to the documentation of your chosen platform (e.g., Render, Fly.io, AWS Fargate) for deployment instructions.
