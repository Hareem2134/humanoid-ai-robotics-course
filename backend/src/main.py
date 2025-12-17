import logging
from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from src.api import chat

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

app = FastAPI(
    title="RAG Chatbot API",
    description="API for interacting with the RAG chatbot embedded in the Physical AI & Humanoid Robotics Textbook.",
    version="1.0.0",
)

app.include_router(chat.router, prefix="/api/v1")

@app.get("/", summary="Root endpoint")
def read_root():
    """
    Root endpoint of the API.
    """
    logger.info("Root endpoint accessed.")
    return {"Hello": "World"}

@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc: HTTPException):
    """
    Handles HTTP exceptions and returns a JSON response.
    """
    logger.error(f"HTTP Exception: {exc.detail}, Status: {exc.status_code}")
    return JSONResponse(
        status_code=exc.status_code,
        content={"message": exc.detail},
    )

@app.exception_handler(Exception)
async def general_exception_handler(request, exc: Exception):
    """
    Handles unhandled exceptions and returns a generic internal server error.
    """
    logger.error(f"Unhandled Exception: {exc}", exc_info=True)
    return JSONResponse(
        status_code=500,
        content={"message": "Internal server error"},
    )
