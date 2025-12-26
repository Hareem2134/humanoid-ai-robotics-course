import React, { useState } from 'react';
import Layout from '@theme/Layout';
import SignupForm from '../components/Auth/SignupForm';
import BackgroundForm from '../components/Auth/BackgroundForm'; // Import BackgroundForm
import { useAuth } from '../contexts/AuthContext'; // Import useAuth
import { signup as apiSignup, updateUserProfile } from '../utils/api';


function Signup() {
  const [showBackgroundForm, setShowBackgroundForm] = useState(false);
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState(''); // Store password temporarily for auth context
  const { login, backendUrl } = useAuth(); // Get login function and backendUrl from AuthContext

  const handleSignupSuccess = async (email, password) => {
    setSignupEmail(email);
    setSignupPassword(password);
    setShowBackgroundForm(true);
    // Automatically log in the user after successful registration
    try {
      const response = await apiSignup(backendUrl, email, password);
      if (response.ok) {
        const data = await response.json();
        // Assuming signup also returns a token or can be used to immediately login
        // For fastapi-users, registration creates the user, then login is separate.
        // So we'd need to call signin here, or redirect to signin.
        // For simplicity, let's assume successful registration means we can try to log them in to get a token.
        const loginResponse = await fetch(`${backendUrl}/auth/jwt/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({ username: email, password }).toString(),
        });
        if (loginResponse.ok) {
          const loginData = await loginResponse.json();
          login(loginData.access_token, data); // Assuming 'data' from signup response is enough for user object
        } else {
          console.error('Auto-login after signup failed.');
        }
      }
    } catch (error) {
      console.error('Error during auto-login after signup:', error);
    }
  };

  const handleBackgroundSubmit = async (backgroundData) => {
    // This function will be called with the background data
    // You'll need to send this data to your backend
    console.log('Background data submitted:', backgroundData);
    try {
      const response = await updateUserProfile(backendUrl, backgroundData);
      if (response.ok) {
        alert('Background data saved successfully!');
        // Redirect or show success message
      } else {
        const errorData = await response.json();
        alert(`Failed to save background data: ${errorData.detail}`);
      }
    } catch (error) {
      alert('Network error while saving background data.');
      console.error('Error saving background data:', error);
    }
  };

  return (
    <Layout
      title="Sign Up"
      description="Sign up for an account to access personalized content.">
      <main>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
          <div>
            <h1>Sign Up</h1>
            {!showBackgroundForm ? (
              <SignupForm onSignupSuccess={handleSignupSuccess} />
            ) : (
              <>
                <h2>Tell us about your background</h2>
                <BackgroundForm onSubmit={handleBackgroundSubmit} />
              </>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Signup;
