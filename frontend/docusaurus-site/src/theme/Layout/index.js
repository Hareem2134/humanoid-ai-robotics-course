import React from 'react';
import Layout from '@theme-original/Layout';
import { AuthProvider } from '../../contexts/AuthContext';

export default function LayoutWrapper(props) {
  return (
    <AuthProvider>
      <Layout {...props} />
    </AuthProvider>
  );
}
