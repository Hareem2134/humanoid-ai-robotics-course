import logging
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from src.api import chat
from src.core.database import create_tables
from src.core.users import fastapi_users
from src.core.auth import auth_backend
from src.core.schemas import UserRead, UserCreate
from src.services.rag_service import chatbot_service

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    print("Starting up...")
    await create_tables()
    await chatbot_service.initialize()
    yield
    # Shutdown
    print("Shutting down...")


app = FastAPI(
    title="RAG Chatbot API",
    description="API for interacting with the RAG chatbot embedded in the Physical AI & Humanoid Robotics Textbook.",
    version="1.0.0",
    lifespan=lifespan,
)

# --- CORS Middleware ---
# In a production environment, you should be more specific with the allowed origins.
# For example, you would replace '*' with your actual frontend's domain.
# For this project, we'll allow any Vercel deployment and localhost.
origins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://*.vercel.app",  # Allow any subdomain under vercel.app
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(chat.router, prefix="/api")

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

@app.get("/", summary="Root endpoint")
def read_root():
    """
    Root endpoint of the API.
    """
    logger.info("Root endpoint accessed.")
    return {"Hello": "World"}

