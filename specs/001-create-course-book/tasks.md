# Implementation Tasks: RAG Chatbot

This document outlines the detailed tasks for implementing the Retrieval-Augmented Generation (RAG) Chatbot feature, as specified in `specs/001-create-course-book/spec.md` and detailed in `specs/001-create-course-book/plan.md`. It also includes tasks to diagnose and resolve the issue of the chatbot UI not appearing on localhost, and then proceed with its implementation.

## Feature: RAG Chatbot

### Phase 1: Setup

- [ ] T001 Initialize Python backend virtual environment and install dependencies in `backend/requirements.txt`
- [ ] T002 Initialize Node.js frontend dependencies in `frontend/docusaurus-site/package.json`
- [ ] T003 Create `.env` files for backend and frontend based on `.env.template` in `backend/.env.template` and `frontend/docusaurus-site/.env.template` (if it exists, otherwise define a new one for frontend)

### Phase 2: Foundational Tasks (Blocking Prerequisites)

- [ ] T004 Setup Qdrant Cloud Free Tier instance and obtain API key and URL for `backend/.env`
- [ ] T005 Setup OpenAI API key for `backend/.env`
- [ ] T006 Setup Neon Serverless Postgres instance and obtain `NEON_DATABASE_URL` for `backend/.env`
- [ ] T007 Implement database connection and schema creation logic to automatically run `create_tables()` from `backend/src/core/database.py` on backend startup.
- [ ] T008 Develop a clear process for initial data ingestion using `backend/scripts/ingestion_script.py` and ensure it can be run as part of setup or deployment.
- [ ] T009 [P] Implement `get_rag_chain` in `backend/src/services/rag_service.py` to correctly initialize LLM, embedding model, and vector store.
- [ ] T010 [P] Implement `get_rag_response` in `backend/src/services/rag_service.py` to handle query processing and response generation.

### Phase 3: Chatbot UI Visibility & Integration (P1 - Critical for all UI tasks)

**Story Goal**: Ensure the RAG Chatbot UI is correctly rendered and visible on all Docusaurus pages.

**Independent Test Criteria**: The chatbot toggle button and, when opened, the chatbot container are visible and interactive on any Docusaurus page on localhost.

- [ ] T011 Diagnose: Inspect Docusaurus DOM on localhost to confirm the presence of `<div id="chatbot-container">` injected by `frontend/docusaurus-site/plugins/chatbot-plugin/index.js`.
- [ ] T012 Debug: If `chatbot-container` is present, check browser console for JavaScript errors originating from `frontend/docusaurus-site/src/chatbot.js` or `frontend/docusaurus-site/src/components/Chatbot.js` that might prevent React from rendering.
- [ ] T013 Debug: Examine `frontend/docusaurus-site/src/components/Chatbot.module.css` for any CSS rules (e.g., `display: none`, `visibility: hidden`, `z-index` issues) that might be hiding the chatbot element.
- [ ] T014 If `chatbot-container` is not present, analyze why `injectHtmlTags` in `frontend/docusaurus-site/plugins/chatbot-plugin/index.js` is not effectively injecting the div, potentially modifying the plugin or Docusaurus theme layout to ensure its presence.
- [ ] T015 If React rendering issues persist, temporarily simplify `frontend/docusaurus-site/src/chatbot.js` and `frontend/docusaurus-site/src/components/Chatbot.js` to a minimal "Hello World" component to isolate rendering problems.

### Phase 4: User Story 1 - General Questions (Priority: P1)

**Story Goal**: A student reading the textbook can open the chatbot, ask a question about a topic covered in the book, and receive a relevant answer based on the book's content.

**Independent Test Criteria**: The chatbot can be opened, a general question can be asked, and a relevant answer (or "no info") is returned.

- [ ] T016 [P] [US1] Implement `chat_query` API endpoint in `backend/src/api/chat.py` to handle general questions.
- [ ] T017 [P] [US1] Update `backend/src/api/chat.py` to save conversation history to the Neon database.
- [ ] T018 [P] [US1] Modify `frontend/docusaurus-site/src/components/Chatbot.js` to send general questions to the `/api/v1/chat/query` endpoint and display responses.
- [ ] T019 [US1] Ensure the chatbot UI (`frontend/docusaurus-site/src/components/Chatbot.js`) opens and closes correctly.

### Phase 5: User Story 2 - Context-aware Answers (Priority: P2)

**Story Goal**: A student can select a paragraph of text in the textbook, and the chatbot will provide an option to ask a question specifically about that selection. The answer should be based only on the selected text.

**Independent Test Criteria**: A user can select text, a button appears to "Ask about selection", and the chatbot answers a question based only on that selection.

- [ ] T020 [P] [US2] Implement `query_selection` API endpoint in `backend/src/api/chat.py` to handle context-aware questions with selected text.
- [ ] T021 [P] [US2] Update `backend/src/api/chat.py` to save context-aware conversation history to the Neon database.
- [ ] T022 [P] [US2] Modify `frontend/docusaurus-site/src/components/Chatbot.js` to detect text selection and display an "Ask Chatbot about selection" button.
- [ ] T023 [P] [US2] Modify `frontend/docusaurus-site/src/components/Chatbot.js` to send selected text and query to the `/api/v1/chat/query_selection` endpoint.

### Phase 6: Polish & Cross-Cutting Concerns

- [ ] T024 Implement comprehensive error handling for both backend and frontend, providing user-friendly messages.
- [ ] T025 Review and update `deployment_instructions.md` and `vercel-deployment.md` with complete and accurate instructions for deploying the RAG chatbot (backend and frontend), including all environment variables and database setup/ingestion steps.
- [ ] T026 Implement unit and integration tests for `backend/src/api/chat.py`, `backend/src/services/rag_service.py`, and `backend/src/core/database.py`.
- [ ] T027 Implement Playwright end-to-end tests for the chatbot functionality as per `spec.md` acceptance scenarios.
- [ ] T028 Optimize chatbot performance to meet SC-003 (p95 latency under 3 seconds).

## Dependencies

- Phase 1 (Setup) must be completed before any other phase.
- Phase 2 (Foundational Tasks) must be completed before Phase 3, 4 or 5.
- Phase 3 (Chatbot UI Visibility & Integration) is critical and must be resolved before proceeding with UI-dependent tasks in Phase 4 and 5.
- Phase 4 (User Story 1) and Phase 5 (User Story 2) can be worked on somewhat in parallel after Foundational and UI Visibility tasks, but User Story 1 (General Questions) is P1 and should be prioritized.
- Phase 6 (Polish & Cross-Cutting Concerns) can begin after core functionality for both user stories is implemented.

## Parallel Execution Examples

- After Phase 2 and Phase 3, tasks T016 and T018 (US1 backend/frontend) can be worked on in parallel.
- After Phase 2 and Phase 3, tasks T020 and T022 (US2 backend/frontend) can be worked on in parallel.

## Implementation Strategy

The implementation will follow an MVP-first approach. User Story 1 (General Questions) will be prioritized and delivered first as a minimum viable product. Subsequent features, such as context-aware answers, will be incrementally added. Each user story will be developed with its own independent testing to ensure functionality before integration.