import logging
from typing import List, Tuple, Dict, Any
from operator import itemgetter

from langchain_community.vectorstores import Qdrant as LangchainQdrant
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough, RunnableLambda
from langchain_core.output_parsers import StrOutputParser
from langchain_openai import ChatOpenAI, OpenAIEmbeddings

from ..core.qdrant import get_qdrant_client

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def format_docs(docs: List[Any]) -> str:
    """Helper function to format retrieved documents into a string."""
    return "\n\n".join(doc.page_content for doc in docs)

class ChatbotService:
    def __init__(self, collection_name: str = "ai_robotics_textbook"):
        self.lcel_chain = None
        self._collection_name = collection_name
        self.retriever = None

    def initialize(self):
        """
        Initializes the RAG chain using manual LCEL. This should be called once at application startup.
        """
        logger.info("Initializing RAG chain with MANUAL LCEL...")

        # 1. Initialize LLM and Embeddings
        llm = ChatOpenAI(temperature=0.7, model_name="gpt-3.5-turbo")
        embeddings = OpenAIEmbeddings()

        # 2. Initialize Vector Store and Retriever
        qdrant_client = get_qdrant_client()
        vectorstore = LangchainQdrant(
            client=qdrant_client,
            collection_name=self._collection_name,
            embeddings=embeddings,
        )
        self.retriever = vectorstore.as_retriever()

        # 3. Define System Prompt Template
        template = (
            "You are an assistant for question-answering tasks. "
            "Use the following pieces of retrieved context to answer the question. "
            "If you don't know the answer, just say that you don't know. "
            "Use three sentences maximum and keep the answer concise.\n\n"
            "Context: {context}\n\n"
            "Question: {question}\n\n"
            "Answer:"
        )
        prompt = ChatPromptTemplate.from_template(template)

        # 4. Manually construct the LCEL chain
        self.lcel_chain = (
            {
                "context": itemgetter("question") | self.retriever | RunnableLambda(format_docs),
                "question": itemgetter("question"),
            }
            | prompt
            | llm
            | StrOutputParser()
        )

        logger.info("MANUAL LCEL RAG chain initialized successfully.")

    async def get_rag_response(
        self, query: str, selected_text: str = None
    ) -> Tuple[str, List[str]]:
        """
        Handles a query using the RAG service, with optional selected text as context.

        Args:
            query (str): The user's question.
            selected_text (str, optional): Text selected by the user to provide additional context.

        Returns:
            Tuple[str, List[str]]: A tuple containing the answer string and a list of reference URLs.
        """
        if not self.lcel_chain or not self.retriever:
            raise RuntimeError("RAG chain is not initialized. Please call initialize() first.")

        input_query = (
            f"Context from user selection: {selected_text}\nQuestion: {query}"
            if selected_text
            else query
        )

        logger.info(f"Executing MANUAL LCEL RAG chain with input: {input_query}")

        try:
            # Since we built the chain manually, we also retrieve context manually for references
            context_docs = await self.retriever.ainvoke(input_query)
            references = [doc.metadata.get("source", "N/A") for doc in context_docs]
        except Exception as e:
            logger.error(f"Error retrieving documents from Qdrant: {e}", exc_info=True)
            raise RuntimeError("Failed to retrieve documents from the vector store.") from e

        try:
            # Invoke the main chain to get the answer
            answer = await self.lcel_chain.ainvoke({"question": input_query})
        except Exception as e:
            logger.error(f"Error invoking the RAG chain: {e}", exc_info=True)
            raise RuntimeError("Failed to get a response from the RAG chain.") from e

        logger.info(f"RAG chain returned answer: {answer}")
        return answer, references


# Create a single, shared instance of the chatbot service
chatbot_service = ChatbotService()