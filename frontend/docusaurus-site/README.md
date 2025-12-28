# Frontend Docusaurus Site

This directory contains the Docusaurus-based frontend for the Humanoid AI & Robotics Textbook. The chatbot UI is integrated as a React component within this site.

## Quickstart

### 1. Environment Setup

This project uses Node.js. Please ensure you have Node.js version 20.0 or higher installed.

### 2. Install Dependencies

Install the required Node.js packages using `npm` or `yarn`.

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Environment Variables (for connecting to backend)

The frontend needs to know the URL of the backend API. While the development server uses a proxy, the production build will use this variable.

- Create a `.env` file in this directory (`frontend/docusaurus-site`).
- Add the following variable, pointing to your deployed backend URL:
  ```
  BACKEND_URL=http://localhost:8000
  ```
  For development, `http://localhost:8000` is sufficient as the proxy will handle requests.

### 4. Running the Development Server

Start the Docusaurus development server to view the site and test changes.

```bash
npm run start
```

Or with yarn:
```bash
yarn start
```

The website will be available at `http://localhost:3000`. The development server will automatically proxy API requests from `/api` to the backend running at `http://localhost:8000` (as configured in `plugins/webpack-proxy`).