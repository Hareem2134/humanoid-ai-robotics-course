import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem('token', token);
    if (token) {
      // In a real app, you would verify the token with the backend and get user info
      // For now, we'll just simulate a user object if a token exists
      setUser({ email: 'user@example.com' }); 
    } else {
      setUser(null);
    }
    setLoading(false);
  }, [token]);

  const login = async (email, password) => {
    const response = await fetch('http://localhost:8000/auth/jwt/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        username: email,
        password: password,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      setToken(data.access_token);
    } else {
      throw new Error(data.detail || 'Login failed');
    }
  };

  const signup = async (email, password) => {
    const response = await fetch('http://localhost:8000/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      // You might want to automatically log in the user here
      // For simplicity, we'll just let them log in manually after signup
    } else {
      throw new Error(data.detail || 'Signup failed');
    }
  };

  const logout = () => {
    setToken(null);
  };

  const value = { user, loading, login, signup, logout, token };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
