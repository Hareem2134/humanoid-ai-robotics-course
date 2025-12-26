import React from 'react';
import Layout from '@theme/Layout';
import SigninForm from '../components/Auth/SigninForm'; // Import the SigninForm component

function Signin() {
  return (
    <Layout
      title="Sign In"
      description="Sign in to your account to access personalized content.">
      <main>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
          <div>
            <h1>Sign In</h1>
            <SigninForm /> {/* Render the SigninForm component */}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Signin;
