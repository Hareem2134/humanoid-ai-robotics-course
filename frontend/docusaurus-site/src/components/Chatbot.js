import React, { useState, useEffect } from 'react';
import styles from './Chatbot.module.css'; // Assuming you create a CSS module

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [references, setReferences] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedText, setSelectedText] = useState('');

  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection();
      setSelectedText(selection.toString().trim());
    };

    document.addEventListener('mouseup', handleSelectionChange);
    document.addEventListener('keyup', handleSelectionChange);

    return () => {
      document.removeEventListener('mouseup', handleSelectionChange);
      document.removeEventListener('keyup', handleSelectionChange);
    };
  }, []);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    // Clear selected text when closing chatbot
    if (isOpen) {
      setSelectedText('');
    }
  };

  const handleAskSelection = () => {
    setQuery(selectedText);
    setIsOpen(true); // Open chatbot if not already open
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    setAnswer('');
    setReferences([]);

    const endpoint = selectedText ? '/api/v1/chat/query_selection' : '/api/v1/chat/query';
    const body = selectedText
      ? { query, selected_text: selectedText }
      : { query };

    console.log("Submitting to endpoint:", endpoint);
    console.log("Request body:", body);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setAnswer(data.answer);
      setReferences(data.references);
    } catch (err) {
      console.error("Failed to fetch chatbot response:", err);
      setError("Failed to get a response. Please try again.");
    } finally {
      setIsLoading(false);
      setSelectedText(''); // Clear selected text after submitting
    }
  };

  return (
    <>
      {selectedText && (
        <button className={styles.askSelectionButton} onClick={handleAskSelection}>
          Ask Chatbot about selection
        </button>
      )}

      <button className={styles.toggleButton} onClick={toggleChatbot}>
        {isOpen ? 'Close Chat' : 'Open Chat'}
      </button>

      {isOpen && (
        <div className={styles.chatbotContainer}>
          <div className={styles.chatHeader}>
            <h3>AI Assistant</h3>
            <button className={styles.closeButton} onClick={toggleChatbot}>X</button>
          </div>
          <div className={styles.chatBody}>
            {answer && <p className={styles.answer}>{answer}</p>}
            {references.length > 0 && (
              <div className={styles.references}>
                <h4>References:</h4>
                <ul>
                  {references.map((ref, index) => (
                    <li key={index}>{ref}</li>
                  ))}
                </ul>
              </div>
            )}
            {isLoading && <p>Loading...</p>}
            {error && <p className={styles.error}>{error}</p>}
          </div>
          <form onSubmit={handleSubmit} className={styles.chatInputForm}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask a question..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>Send</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Chatbot;
