# Implementation Plan: Fix Homepage Links

## Feature: Fix Homepage Links

This document outlines the technical plan for fixing the broken navigation links on the homepage.

## 1. Tech Stack

- **Framework**: Docusaurus
- **Language**: TypeScript/JavaScript (React)
- **Styling**: CSS Modules / Infima

## 2. Project Structure & Key Files

- **Homepage Component**: The main component for the homepage is located at `frontend/docusaurus-site/src/pages/index.tsx` (or `.js`). This file contains the JSX for the links that need to be fixed.
- **Content Files**: The course content, which the links should point to, is located under `frontend/docusaurus-site/docs/`.
- **Docusaurus Configuration**: The site configuration, which defines the sidebar and navigation, is in `frontend/docusaurus-site/docusaurus.config.ts`. This might be useful for confirming correct paths.
- **Sidebars Configuration**: `frontend/docusaurus-site/sidebars.js` will define the structure of the documentation sidebar, which is the source of truth for the doc paths.

## 3. Implementation Strategy

The approach is to identify the broken links in the homepage component and update their `href` attributes to match the correct paths as defined by the file structure in the `docs` directory and the `sidebars.js` configuration.

1.  **Analysis**: Inspect `frontend/docusaurus-site/src/pages/index.tsx` to identify all external-looking links.
2.  **Path Resolution**: For each link, determine the correct destination path by looking at the `sidebars.js` file and the directory structure under `frontend/docusaurus-site/docs/`. Docusaurus generates routes from these files.
3.  **Modification**: Edit the `href` attributes in `frontend/docusaurus-site/src/pages/index.tsx` to use the correct, relative paths (e.g., `/docs/intro`).
4.  **Verification**: Run the development server to manually test each link and confirm it navigates to the correct page.

## 4. MVP Scope

The MVP is to have all visible links on the rendered homepage pointing to valid, existing pages within the site.
