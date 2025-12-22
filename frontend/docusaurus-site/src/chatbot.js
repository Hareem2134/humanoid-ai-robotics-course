import React from 'react';
import ReactDOM from 'react-dom';
import Chatbot from './components/Chatbot';

export default function () {
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      const container = document.getElementById('chatbot-container');
      if (container) {
        ReactDOM.render(<Chatbot />, container);
      }
    });
  }
}
