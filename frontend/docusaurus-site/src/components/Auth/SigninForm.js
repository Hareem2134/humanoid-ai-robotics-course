import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { signin } from '../../utils/api'; // Import the signin API function

function SigninForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { siteConfig } = useDocusaurusContext();
  const backendUrl = siteConfig.customFields.backendUrl;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await signin(backendUrl, email, password); // Use the signin API function

      if (response.ok) {
        const data = await response.json();
        // Assuming the backend returns a token, you might want to store it in localStorage or a context
        localStorage.setItem('access_token', data.access_token);
        setSuccess('Login successful!');
        // Optionally redirect to a protected page
        // window.location.href = '/dashboard';
      } else {
        const data = await response.json();
        setError(data.detail || 'Login failed.');
      }
    } catch (err) {
      setError('Network error or server unavailable.');
      console.error('Signin error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SigninForm;
