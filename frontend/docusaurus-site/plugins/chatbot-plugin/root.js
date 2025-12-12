import React from 'react';
import Chatbot from '../../src/components/Chatbot';

// This is a client-side module, so it runs in the browser.
// We'll use Docusaurus's 'injectHtmlTags' to inject this component into the root.
// Or we can just render it.

// This is a client-side module that Docusaurus loads.
// We can use it to wrap the root component or to add global components.

// Let's create a simple wrapper that renders the Chatbot.
// This will be added to the DOM at the end of the body.

function Root({children}) {
  return (
    <>
      {children}
      <Chatbot />
    </>
  );
}

export default Root;
