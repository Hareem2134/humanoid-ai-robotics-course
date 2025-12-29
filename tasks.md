---
feature: "Debug and Fix Chatbot"
version: "1.0"
---

## Overview

This document outlines the tasks required to debug and fix the chatbot functionality. The chatbot UI is currently not visible, and the backend API calls might be failing. This plan addresses both the frontend rendering and the backend routing issues. It also provides an optional path to switch to a free Large Language Model (LLM) provider.

## Implementation Strategy

The implementation is divided into four phases:
1.  **Frontend Fixes:** Correctly render the chatbot component in the Docusaurus application.
2.  **Backend Fixes:** Fix the API routing to ensure the frontend can communicate with the backend.
3.  **Verification:** Verify that the chatbot is fully functional.
4.  **Optional LLM Switch:** (Optional) Replace the OpenAI LLM with a free alternative from Hugging Face.

This phased approach ensures that we first restore the basic functionality and then consider enhancements.

## Dependencies

The phases are designed to be executed sequentially. Phase 2 depends on Phase 1, and Phase 3 depends on Phase 2. Phase 4 is independent and can be executed after Phase 3.

---

## Phase 1: Frontend Fixes

**Goal:** Correctly render the chatbot component in the user interface.

**Independent Test Criteria:**
*   The chatbot window should be visible on all pages of the Docusaurus site.

### Tasks

- [ ] T001 [US1] Create a `ChatbotContext.js` file to manage the chatbot's state in `frontend/docusaurus-site/src/contexts/ChatbotContext.js`.
- [ ] T002 [US1] Modify `frontend/docusaurus-site/src/theme/Root.js` to wrap the application with the `ChatbotProvider` and render the `Chatbot` component.
- [ ] T003 [US1] Remove the redundant `chatbot-plugin` from `frontend/docusaurus-site/docusaurus.config.ts`.
- [ ] T004 [US1] Clean up `frontend/docusaurus-site/src/theme/Layout/index.js` by removing the redundant `AuthProvider`.

---

## Phase 2: Backend Fixes

**Goal:** Fix the API routing to enable communication between the frontend and backend.

**Independent Test Criteria:**
*   The frontend should receive a successful response (HTTP 200) from the backend when making a request to the chatbot API.

### Tasks

- [ ] T005 [US2] In `backend/src/main.py`, change the API prefix for the chat router from `/api/v1` to `/api` to match the frontend requests.

---

## Phase 3: Verification

**Goal:** Ensure the chatbot is fully functional.

**Independent Test Criteria:**
*   Sending a message in the chatbot should result in a response from the LLM being displayed.
*   The browser's developer console should not show any errors related to the chatbot.

### Tasks

- [ ] T006 [US3] Start the frontend and backend development servers.
- [ ] T007 [US3] Open the website in a browser and verify that the chatbot UI is visible.
- [ ] T008 [US3] Send a test message to the chatbot and verify that a response is received.
- [ ] T009 [US3] Check the browser's developer console for any errors.
- [ ] T010 [US3] Check the backend server logs to ensure that requests are being received and processed correctly.

---

## Phase 4: (Optional) Switch to a Free LLM

**Goal:** Replace the OpenAI LLM with a free alternative from Hugging Face.

**Independent Test Criteria:**
*   The chatbot should function correctly using a model from the Hugging Face Inference API.

### Tasks

- [ ] T011 [US4] Sign up for a Hugging Face account and get an API token.
- [ ] T012 [US4] Add the Hugging Face API token to your backend environment variables (e.g., in a `.env` file as `HUGGINGFACEHUB_API_TOKEN`).
- [ ] T013 [US4] Modify `backend/src/services/rag_service.py` to use `HuggingFaceHub` from `langchain_community.llms` instead of `ChatOpenAI`. You will need to import it and instantiate it with your API token.
- [ ] T014 [US4] Choose a suitable model from the Hugging Face Hub (e.g., `mistralai/Mistral-7B-Instruct-v0.2`) and configure `HuggingFaceHub` to use it.
- [ ] T015 [US4] Restart the backend server and test the chatbot.
