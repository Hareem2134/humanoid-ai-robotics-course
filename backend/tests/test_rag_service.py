
import unittest
from unittest.mock import patch, MagicMock
from backend.src.services.rag_service import get_rag_response

class TestRagService(unittest.TestCase):

    @patch('backend.src.services.rag_service.get_rag_chain')
    async def test_get_rag_response_without_selected_text(self, mock_get_rag_chain):
        # Arrange
        mock_rag_chain = MagicMock()
        mock_rag_chain.invoke.return_value = {
            "result": "This is a test answer.",
            "source_documents": [{"metadata": {"source": "/docs/intro"}}]
        }
        mock_get_rag_chain.return_value = mock_rag_chain
        
        query = "What is this?"
        
        # Act
        answer, references = await get_rag_response(query)
        
        # Assert
        self.assertEqual(answer, "This is a test answer.")
        self.assertEqual(references, ["/docs/intro"])
        mock_rag_chain.invoke.assert_called_once_with({"query": query})

    @patch('backend.src.services.rag_service.get_rag_chain')
    async def test_get_rag_response_with_selected_text(self, mock_get_rag_chain):
        # Arrange
        mock_rag_chain = MagicMock()
        mock_rag_chain.invoke.return_value = {
            "result": "This is a contextual answer.",
            "source_documents": [{"metadata": {"source": "/docs/intro"}}]
        }
        mock_get_rag_chain.return_value = mock_rag_chain
        
        query = "What is this?"
        selected_text = "This is some selected text."
        
        # Act
        answer, references = await get_rag_response(query, selected_text)
        
        # Assert
        self.assertEqual(answer, "This is a contextual answer.")
        self.assertEqual(references, ["/docs/intro"])
        expected_query_with_context = f"Context: {selected_text}\nQuestion: {query}"
        mock_rag_chain.invoke.assert_called_once_with({"query": expected_query_with_context})

if __name__ == '__main__':
    unittest.main()
