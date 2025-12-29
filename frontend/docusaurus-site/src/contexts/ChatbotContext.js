import React, { createContext, useState, useContext } from 'react';

const ChatbotContext = createContext();

export function ChatbotProvider({ children }) {
  const [isChatbotVisible, setIsChatbotVisible] = useState(true);

  return (
    <ChatbotContext.Provider value={{ isChatbotVisible, setIsChatbotVisible }}>
      {children}
    </ChatbotContext.Provider>
  );
}

export function useChatbot() {
  return useContext(ChatbotContext);
}
