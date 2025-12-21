import React from 'react';
import ReactDOM from 'react-dom/client';
import Chatbot from './components/Chatbot';

document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('chatbot-container');
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <Chatbot />
      </React.StrictMode>
    );
  }
});
