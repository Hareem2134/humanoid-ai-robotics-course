
import React, { useReducer, useEffect, useRef } from 'react';
import styles from './Chatbot.module.css';

const initialState = {
  query: '',
  history: [],
  selectedText: '',
  loading: false,
  error: '',
};

function chatbotReducer(state, action) {
  switch (action.type) {
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    case 'ADD_TO_HISTORY':
      return { ...state, history: [...state.history, action.payload] };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'SET_SELECTED_TEXT':
      return { ...state, selectedText: action.payload };
    case 'CLEAR_SELECTION':
      return { ...state, selectedText: '' };
    case 'SUBMIT_QUERY':
      return { ...state, loading: true, error: '', history: [...state.history, action.payload], query: '' };
    default:
      throw new Error();
  }
}

const Chatbot = () => {
  const [state, dispatch] = useReducer(chatbotReducer, initialState);
  const { query, history, selectedText, loading, error } = state;
  const messageIdCounter = useRef(0);

  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection().toString();
      if (selection && selection.trim().length > 10) {
        dispatch({ type: 'SET_SELECTED_TEXT', payload: selection });
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

    const userMessage = { id: messageIdCounter.current++, sender: 'user', text: query };
    dispatch({ type: 'SUBMIT_QUERY', payload: userMessage });

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
        const errorData = await res.json().catch(() => ({ message: 'Something went wrong!' }));
        throw new Error(errorData.detail || 'Something went wrong!');
      }

      const data = await res.json();
      const botMessage = { id: messageIdCounter.current++, sender: 'bot', text: data.answer };
      dispatch({ type: 'ADD_TO_HISTORY', payload: botMessage });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const clearSelection = () => {
    dispatch({ type: 'CLEAR_SELECTION' });
  };

  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.chatbotHistory}>
        {history.map((item) => (
          <div key={item.id} className={styles[item.sender]}>
            <p>{item.text}</p>
          </div>
        ))}
        {loading && <div className={styles.bot}><p>Thinking...</p></div>}
        {error && <div className={styles.error}><p>Error: {error}</p></div>}
      </div>
      {selectedText && (
        <div className={styles.selectedTextContainer}>
          <p><strong>Selected Text:</strong> {selectedText}</p>
          <button onClick={clearSelection} className={styles.clearButton}>Clear</button>
        </div>
      )}
      <form onSubmit={handleSubmit} className={styles.chatbotForm}>
        <input
          type="text"
          value={query}
          onChange={(e) => dispatch({ type: 'SET_QUERY', payload: e.target.value })}
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
