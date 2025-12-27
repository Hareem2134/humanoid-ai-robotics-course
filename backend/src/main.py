import logging
import os
from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from fastapi_users import FastAPIUsers, models
from fastapi_users.authentication import BearerTransport, AuthenticationBackend
from fastapi_users.db import SQLAlchemyUserDatabase
from starlette.middleware.cors import CORSMiddleware # Import CORSMiddleware
from src.api import chat
from src.core.database import create_tables, get_db
from src.core.models.user import User as DBUser
from src.api.models.user import UserRead, UserCreate, UserUpdate
from src.services.user_service import get_user_db # Import get_user_db


# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# --- FastAPI Users Configuration ---
SECRET = os.getenv("SECRET_KEY", "your-secret-key") # Use environment variable for secret key

bearer_transport = BearerTransport(tokenUrl="auth/jwt/login")

def get_jwt_strategy() -> AuthenticationBackend[DBUser, models.UUID]:
    return AuthenticationBackend(name="jwt", transport=bearer_transport, get_db_user=get_user_db)

auth_backend = AuthenticationBackend(
    name="jwt",
    transport=bearer_transport,
    get_db_user=get_user_db,
)


fastapi_users = FastAPIUsers[DBUser, models.UUID](
    get_user_db,
    [auth_backend],
)

app = FastAPI(
    title="RAG Chatbot API",
    description="API for interacting with the RAG chatbot embedded in the Physical AI & Humanoid Robotics Textbook.",
    version="1.0.0",
)

# --- CORS Middleware ---
origins = [
    "http://localhost:3000",  # Allow your Docusaurus frontend
    # Add other origins as needed (e.g., your Vercel deployment URL)
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(chat.router, prefix="/api/v1")

# --- FastAPI Users Routers ---
app.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix="/auth/jwt",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_users_router(UserRead, UserUpdate),
    prefix="/users",
    tags=["users"],
)


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
