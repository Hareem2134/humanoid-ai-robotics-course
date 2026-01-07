---
feature: "Fix Vercel Chatbot"
version: "1.0"
squad: "AI/Frontend"
status: "Ready for Implementation"
---

# Tasks: Fix Vercel Chatbot

This document outlines the tasks required to fix the RAG chatbot on the Vercel deployment. The issue is that the frontend is making API calls to a relative path, which does not work in a production environment without a proxy.

## Phase 1: Fix Frontend API Calls

This phase will update the frontend code to use the correct backend URL.

### User Story 1: Use Production Backend URL

**Goal**: The frontend must make API calls to the production backend URL defined in the Docusaurus configuration.
**Independent Test Criteria**: After deployment, network requests from the browser should be directed to the `BACKEND_URL` specified in the Vercel environment variables.

- [x] T001 [US1] Modify `frontend/docusaurus-site/src/components/Chatbot.js` to import and use `useDocusaurusContext` to get the `backendUrl` from `siteConfig.customFields`.
- [x] T002 [US1] Prepend the `backendUrl` to the API endpoint URLs in the `fetch` calls within `frontend/docusaurus-site/src/components/Chatbot.js`.
- [x] T003 [US1] The API path in `frontend/docusaurus-site/src/components/Chatbot.js` is `/api/v1/chat/query` but in `backend/src/api/chat.py` it is `/api/chat/query`. Update the frontend to use the correct API path.
- [ ] T004 [US1] Ensure the `BACKEND_URL` environment variable is set in the Vercel project settings to the correct URL of the deployed backend.

## Implementation Strategy

The tasks in this plan should be executed sequentially as they all affect the same file. Once completed, the frontend should be able to communicate with the backend on Vercel.
