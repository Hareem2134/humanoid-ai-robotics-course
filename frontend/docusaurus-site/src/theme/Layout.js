
import React from 'react';
import clsx from 'clsx';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import {PageMetadata, SkipToContent} from '@docusaurus/theme-common';
import {useKeyboardNavigation} from '@docusaurus/theme-common/internal';
import {ThemeClassNames} from '@docusaurus/theme-common';
import Navbar from '@theme/Navbar';
import LayoutHead from '@theme/Layout/Head';
import Footer from '@theme/Footer';
import LayoutProvider from '@theme/Layout/Provider';
import {
  DocsSidebarProvider,
  useDocsSidebar,
} from '@docusaurus/theme-common/internal';
import Chatbot from './Chatbot'; // Import the Chatbot component

import styles from './Layout.module.css';

export default function Layout(props) {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-specific, but useful to put here
    title,
    description,
  } = props;
  useKeyboardNavigation();
  const docsSidebar = useDocsSidebar();
  return (
    <LayoutProvider>
      <LayoutHead />

      <PageMetadata title={title} description={description} />

      <SkipToContent />

      <Navbar />

      <div
        id="docusaurus-skip-to-content"
        className={clsx(
          ThemeClassNames.wrapper.main,
          wrapperClassName,
          styles.layoutWrapper,
        )}>
        <ErrorBoundary fallback={(error, resetErrorBoundary) => (
            <LayoutProvider>
              <Navbar />
              <div className="margin-vert--xl">
                Something went wrong.
              </div>
              <Footer />
            </LayoutProvider>
          )}>
          {children}
        </ErrorBoundary>
        <Chatbot /> {/* Render the Chatbot component here */}
      </div>

      {!noFooter && <Footer />}
    </LayoutProvider>
  );
}
