from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional

# Import your RAG service here (will be implemented in T017)
from ..services.rag_service import get_rag_response

router = APIRouter(prefix="/chat", tags=["Chatbot"])

class QueryRequest(BaseModel):
    """
    Request model for general and context-aware chatbot queries.
    """
    query: str
    selected_text: Optional[str] = None

class QueryResponse(BaseModel):
    """
    Response model for chatbot answers.
    """
    answer: str
    references: List[str]

@router.post("/query", response_model=QueryResponse, summary="Ask a general question about the textbook content.")
async def chat_query(request: QueryRequest):
    """
    Endpoint to ask a general question about the textbook content.
    The chatbot will use its knowledge base to provide an answer.
    """
    try:
        answer, references = await get_rag_response(request.query)
        return QueryResponse(answer=answer, references=references)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/query_selection", response_model=QueryResponse, summary="Ask a question based on user-selected text from the textbook.")
async def chat_query_selection(request: QueryRequest):
    """
    Endpoint to ask a question based on user-selected text from the textbook.
    The selected text will be used to provide a highly context-aware answer.
    """
    if not request.selected_text:
        raise HTTPException(status_code=400, detail="selected_text is required for /chat/query_selection")
    
    try:
        answer, references = await get_rag_response(request.query, request.selected_text)
        return QueryResponse(answer=answer, references=references)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))