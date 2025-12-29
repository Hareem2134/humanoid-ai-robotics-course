import React, { useState } from 'react';
import { useAuth } from '../contexts/useAuth';
import { auth } from '../utils/firebase';

function Signup() {
  const { user, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <div>You are already signed in.</div>;
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
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;