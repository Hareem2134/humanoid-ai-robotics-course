
import React, { useState, useEffect } from 'react';
import styles from './Chatbot.module.css';

const Chatbot = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [history, setHistory] = useState([]);
  const [selectedText, setSelectedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection().toString();
      if (selection) {
        setSelectedText(selection);
      }
    };

    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError('');

    try {
      const requestBody = { 
        query,
        selected_text: selectedText
      };

      const res = await fetch(selectedText ? '/api/chat/query_selection' : '/api/chat/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!res.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await res.json();
      setResponse(data.answer);
      setHistory([...history, { query, answer: data.answer }]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setQuery('');
      setSelectedText('');
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.chatbotHistory}>
        {history.map((item, index) => (
          <div key={index}>
            <p><strong>You:</strong> {item.query}</p>
            <p><strong>Bot:</strong> {item.answer}</p>
          </div>
        ))}
        {loading && <p>Loading...</p>}
        {error && <p><strong>Error:</strong> {error}</p>}
      </div>
      {selectedText && (
        <div className={styles.selectedTextContainer}>
          <p><strong>Selected Text:</strong> {selectedText}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className={styles.chatbotForm}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a question..."
          className={styles.chatbotInput}
          disabled={loading}
        />
        <button type="submit" className={styles.chatbotSubmit} disabled={loading}>
          {loading ? '...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
