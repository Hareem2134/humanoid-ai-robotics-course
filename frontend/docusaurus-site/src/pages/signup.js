import React from 'react';
import Layout from '@theme/Layout';
import SignupForm from '../components/Auth/SignupForm'; // Import the SignupForm component

function Signup() {
  return (
    <Layout
      title="Sign Up"
      description="Sign up for an account to access personalized content.">
      <main>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
          <div>
            <h1>Sign Up</h1>
            <SignupForm /> {/* Render the SignupForm component */}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Signup;
