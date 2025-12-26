import React, { createContext, useState, useEffect, useContext } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { fetchUserProfile, logout as apiLogout } from '../utils/api'; // Rename logout to avoid conflict

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { siteConfig } = useDocusaurusContext();
  const backendUrl = siteConfig.customFields.backendUrl;

  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        try {
          const userData = await fetchUserProfile(backendUrl);
          if (userData) {
            setUser(userData);
          } else {
            localStorage.removeItem('access_token');
          }
        } catch (error) {
          console.error('Failed to fetch user profile:', error);
          localStorage.removeItem('access_token');
        }
      }
      setLoading(false);
    };
    checkUser();
  }, [backendUrl]);

  const login = async (token, userData) => {
    localStorage.setItem('access_token', token);
    setUser(userData);
  };

  const logout = async () => {
    try {
      await apiLogout(backendUrl); // Use the renamed apiLogout
    } catch (error) {
      console.error('Logout failed on server:', error);
    } finally {
      localStorage.removeItem('access_token');
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, login, logout, backendUrl }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
