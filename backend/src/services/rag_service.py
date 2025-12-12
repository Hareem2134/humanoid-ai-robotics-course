import os
from typing import List, Tuple
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Qdrant as LangchainQdrant
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate
from qdrant_client import QdrantClient
from openai import OpenAI

# Assuming get_qdrant_client from core.qdrant and get_openai_client from core.openai
from backend.src.core.qdrant import get_qdrant_client
from backend.src.core.openai import get_openai_client

def get_rag_chain(collection_name: str = "ai_robotics_textbook"):
    """
    Initializes and returns a RAG (Retrieval-Augmented Generation) chain
    for answering general queries based on the textbook content.

    Args:
        collection_name (str): The name of the Qdrant collection to use.

    Returns:
        RetrievalQA: A configured LangChain RetrievalQA chain.
    """
    # 1. Initialize Embeddings and Vector Store
    embeddings = OpenAIEmbeddings()
    qdrant_client = get_qdrant_client()
    
    vectorstore = LangchainQdrant(
        client=qdrant_client,
        collection_name=collection_name,
        embeddings=embeddings,
    )

    # 2. Initialize LLM
    llm = get_openai_client()

    # 3. Define Prompt Template
    prompt_template = """Use the following pieces of context to answer the question at the end.
    If you don't know the answer, just say that you don't know, don't try to make up an answer.
    
    {context}
    
    Question: {question}
    """
    PROMPT = PromptTemplate(
        template=prompt_template, input_variables=["context", "question"]
    )

    # 4. Create RetrievalQA chain
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=vectorstore.as_retriever(),
        return_source_documents=True,
        chain_type_kwargs={"prompt": PROMPT}
    )
    return qa_chain

async def get_rag_response(query: str, selected_text: str = None) -> Tuple[str, List[str]]:
    """
    Handles a query using the RAG service, with optional selected text as context.

    Args:
        query (str): The user's question.
        selected_text (str, optional): Text selected by the user to provide additional context. Defaults to None.

    Returns:
        Tuple[str, List[str]]: A tuple containing the answer string and a list of reference URLs.
    """
    rag_chain = get_rag_chain()
    
    # If selected_text is provided, prepend it to the query for context
    if selected_text:
        query_with_context = f"Context: {selected_text}\nQuestion: {query}"
    else:
        query_with_context = query

    result = rag_chain.invoke({"query": query_with_context})
    
    answer = result["result"]
    references = [doc.metadata.get("source", "N/A") for doc in result["source_documents"]]
    
    return answer, references