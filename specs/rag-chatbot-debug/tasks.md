---
description: "Task list for debugging and fixing the RAG Chatbot feature."
---

# Tasks: RAG Chatbot Debug & Fix

**Input**: Analysis of the existing `frontend` and `backend` code.
**Prerequisites**: A functional development environment for both Python/FastAPI and Node.js/Docusaurus.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1)
- Include exact file paths in descriptions

---

## Phase 1: Environment & Configuration Setup

**Purpose**: Establish clear, repeatable setup instructions and fix configuration-related security issues.

- [ ] T001 [P] Create a `README.md` in `backend/` detailing Python environment setup, creation of a `.env` file from the example, and the command to run the data ingestion script (`scripts/ingestion_script.py`) and the main application.
- [ ] T002 [P] Create a `.env.example` file in `backend/` listing all required environment variables: `SECRET_KEY`, `QDRANT_URL`, `QDRANT_API_KEY`, `OPENAI_API_KEY`, and database connection strings.
- [ ] T003 [P] Create a `README.md` in `frontend/docusaurus-site/` explaining Node.js environment setup and how to run the development server.
- [ ] T004 Remove the hardcoded default `"your-secret-key"` from the `SECRET` variable in `backend/src/main.py` to enforce secure configuration via environment variables.

---

## Phase 2: Backend Refactoring & Bug Fixing

**Purpose**: Address major performance and correctness issues in the backend service.

**⚠️ CRITICAL**: The chatbot will be unreliable and slow until this phase is complete.

- [ ] T005 Refactor `backend/src/services/rag_service.py` to initialize the `RetrievalQA` chain only once at application startup. (Hint: Use FastAPI's `lifespan` event handler or a singleton pattern).
- [ ] T006 [US1] Update `get_rag_response` in `backend/src/services/rag_service.py` to use the asynchronous `ainvoke` method for the RAG chain, resolving the synchronous-in-asynchronous call issue.
- [ ] T007 (Optional) Protect chat endpoints in `backend/src/api/chat.py` by adding a `fastapi_users` dependency to the route decorators to ensure only authenticated users can access the chatbot.

---

## Phase 3: User Story 1 - [US1] Fix Chatbot Connectivity and Functionality

**Goal**: A user can open the chatbot UI on the Docusaurus site, ask a question, and receive a valid, streamed response from the backend RAG service without errors.

**Independent Test**: Run the backend and frontend development servers. Open the website, click the "Open Chat" button, type a question, and verify that an answer from the AI is displayed. Check browser and backend logs for errors.

### Implementation for User Story 1

- [ ] T008 [US1] Re-enable the `./plugins/webpack-proxy` plugin in the `plugins` array in `frontend/docusaurus-site/docusaurus.config.ts`.
- [ ] T009 [US1] Fix the API proxy by removing the `pathRewrite` option entirely from the proxy configuration in `frontend/docusaurus-site/plugins/webpack-proxy/index.js`.
- [ ] T010 [US1] Add detailed logging within the `handleSubmit` function in `frontend/docusaurus-site/src/components/Chatbot.js`. Log the `endpoint` being called, the `body` of the request, and the `response.status` to aid in any further debugging.

---

## Phase 4: Polish & Verification

**Purpose**: Final verification and improvements for maintainability.

- [ ] T011 Update the `target` in `frontend/docusaurus-site/plugins/webpack-proxy/index.js` to dynamically use `context.siteConfig.customFields.backendUrl` instead of a hardcoded URL.
- [ ] T012 Manually perform the "Independent Test" for User Story 1 to verify the complete end-to-end functionality of the chatbot.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Can start immediately.
- **Backend Refactoring (Phase 2)**: Depends on Setup for environment variables.
- **User Story 1 (Phase 3)**: Depends on Setup. Can be worked on in parallel with Phase 2, but final testing requires both to be complete.
- **Polish (Phase 4)**: Depends on all previous phases being complete.

### Within Each Phase

- Tasks marked [P] can be done in parallel.
- **Phase 2**: T005 (singleton) should be done before T006 (async invocation).
- **Phase 3**: T008 (enable plugin) and T009 (fix proxy) must be done to test any frontend changes.

---

## Implementation Strategy

1. **Complete Phase 1**: Ensure the project is properly documented and configurable.
2. **Complete Phase 2 & 3**: These can be done in parallel by two developers (one backend, one frontend).
   - Backend developer focuses on T005, T006.
   - Frontend developer focuses on T008, T009, T010.
3. **Integrate and Test**: Once both phases are done, perform the manual test in T012.
4. **Complete Phase 4**: Finalize the configuration for better flexibility.
5. **Final Validation**: The chatbot should now be fully functional in a development environment.
