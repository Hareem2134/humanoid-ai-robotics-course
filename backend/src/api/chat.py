from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import uuid
import logging

# Import your RAG service and database functions
from ..services.rag_service import get_rag_response
from ..core.database import create_conversation, insert_message

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

router = APIRouter(prefix="/chat", tags=["Chatbot"])

class QueryRequest(BaseModel):
    """
    Request model for general and context-aware chatbot queries.
    """
    query: str
    selected_text: Optional[str] = None
    conversation_id: Optional[uuid.UUID] = None

class QueryResponse(BaseModel):
    """
    Response model for chatbot answers.
    """
    answer: str
    references: List[str]
    conversation_id: uuid.UUID

@router.post("/query", response_model=QueryResponse, summary="Ask a general question about the textbook content.")
async def chat_query(request: QueryRequest):
    """
    Endpoint to ask a general question about the textbook content.
    The chatbot will use its knowledge base to provide an answer.
    """
    logger.info(f"Received query: {request.query}")
    try:
        conversation_id = request.conversation_id or create_conversation()
        insert_message(conversation_id, 'user', request.query)
        
        answer, references = await get_rag_response(request.query)
        
        insert_message(conversation_id, 'assistant', answer)
        
        logger.info(f"Returning answer: {answer}")
        return QueryResponse(answer=answer, references=references, conversation_id=conversation_id)
    except Exception as e:
        logger.error(f"Error processing query: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/query_selection", response_model=QueryResponse, summary="Ask a question based on user-selected text from the textbook.")
async def chat_query_selection(request: QueryRequest):
    """
    Endpoint to ask a question based on user-selected text from the textbook.
    The selected text will be used to provide a highly context-aware answer.
    """
    if not request.selected_text:
        raise HTTPException(status_code=400, detail="selected_text is required for /chat/query_selection")
    
    logger.info(f"Received query with selection: {request.query}")
    try:
        conversation_id = request.conversation_id or create_conversation()
        query_with_context = f"Context: {request.selected_text}\nQuestion: {request.query}"
        insert_message(conversation_id, 'user', query_with_context)

        answer, references = await get_rag_response(request.query, request.selected_text)
        
        insert_message(conversation_id, 'assistant', answer)

        logger.info(f"Returning answer: {answer}")
        return QueryResponse(answer=answer, references=references, conversation_id=conversation_id)
    except Exception as e:
        logger.error(f"Error processing query with selection: {e}")
        raise HTTPException(status_code=500, detail=str(e))