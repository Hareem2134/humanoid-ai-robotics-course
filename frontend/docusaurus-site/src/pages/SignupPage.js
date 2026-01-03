import React, { useState } from 'react';
import { useAuth } from '../contexts/useAuth';
import { Redirect } from '@docusaurus/router';

function SignupPage() {
  const { user, signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    try {
      await signup(email, password);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };

  if (user) {
    return <Redirect to="/"/>;
  }
  
  if (success) {
    return <Redirect to="/LoginPage"/>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.g.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>Signup successful! Please log in.</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;
