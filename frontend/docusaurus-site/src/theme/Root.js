import React from 'react';
import { AuthProvider } from '../contexts/useAuth';

export default function Root({ children }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
