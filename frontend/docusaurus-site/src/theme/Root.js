import React from 'react';
import { AuthProvider } from '../contexts/useAuth';
import { ChatbotProvider } from '../contexts/ChatbotContext';
import Chatbot from './Chatbot';

export default function Root({ children }) {
  return (
    <AuthProvider>
      <ChatbotProvider>
        {children}
        <Chatbot />
      </ChatbotProvider>
    </AuthProvider>
  );
}
