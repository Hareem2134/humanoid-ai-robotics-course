import React from 'react';
import Root from '@theme-original/Root';
import Chatbot from '../../../src/components/Chatbot';

export default function RootWrapper(props) {
  return (
    <>
      <Root {...props} />
      <Chatbot />
    </>
  );
}
