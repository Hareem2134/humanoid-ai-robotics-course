# Tasks: Physical AI & Humanoid Robotics Textbook

**Input**: Design documents from `/specs/001-create-course-book/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: No explicit test tasks are included as they were not requested in the feature specification. However, the project structure includes directories for tests, and testing should be performed as part of each implementation task.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `backend/src/`, `frontend/docusaurus-site/`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create the monorepo directory structure: `frontend/` and `backend/`
- [x] T002 [P] Initialize a Docusaurus v3 project in `frontend/docusaurus-site/`
- [x] T003 [P] Initialize a Python project with a virtual environment in `backend/`
- [x] T004 [P] Create a basic FastAPI application structure in `backend/src/`
- [x] T005 [P] Configure linting and formatting tools (e.g., ESLint, Prettier for frontend; Black, Ruff for backend)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure for the RAG chatbot backend that MUST be complete before chatbot-related user stories can be implemented.

**⚠️ CRITICAL**: No chatbot work can begin until this phase is complete.

- [x] T006 Create `backend/requirements.txt` with initial dependencies: `fastapi`, `uvicorn`, `python-dotenv`, `llama-index`, `qdrant-client`, `psycopg2-binary`, `openai`
- [x] T007 Create `.env.example` file in `backend/` with placeholders for `OPENAI_API_KEY`, `NEON_DATABASE_URL`, `QDRANT_API_KEY`, `QDRANT_URL`
- [x] T008 [P] Implement a module to connect to the Neon Postgres database in `backend/src/core/database.py`
- [x] T009 [P] Implement a module to initialize the Qdrant client in `backend/src/core/qdrant.py`
- [x] T010 [P] Implement a module to initialize the OpenAI client in `backend/src/core/openai.py`
- [x] T011 Create the data ingestion script in `backend/scripts/ingest_data.py` to read markdown files, chunk content, generate embeddings, and store in Qdrant and Neon.

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 & 2 - Textbook Publishing and Reading (Priority: P1) 🎯 MVP

**Goal**: Publish a comprehensive textbook using Docusaurus and ensure it is readable online.

**Independent Test**: The Docusaurus site is built successfully and deployed to GitHub Pages, accessible via a public URL, displaying all course content. A student can navigate through all modules and sections.

### Implementation for User Story 1 & 2

- [x] T012 [US1] Configure `frontend/docusaurus-site/docusaurus.config.js` with the textbook title, description, and navigation structure.
- [x] T013 [US1] Create placeholder markdown files for each module and section of the textbook in `frontend/docusaurus-site/docs/`.
- [ ] T014 [US2] Populate the placeholder markdown files with the actual course content.
- [x] T015 [US1] Set up a GitHub Actions workflow in `.github/workflows/deploy-docusaurus.yml` to build and deploy the Docusaurus site to GitHub Pages on push to the main branch.

**Checkpoint**: At this point, the textbook should be published and accessible online.

---

## Phase 4: User Story 3 - RAG Chatbot (General Questions) (Priority: P1)

**Goal**: Allow students to ask general questions about the textbook content using an embedded RAG chatbot.

**Independent Test**: A student can open the chatbot, ask a question about a topic covered in the textbook, and receive a relevant answer.

### Implementation for User Story 3

- [x] T016 [US3] Implement the `/chat/query` endpoint in `backend/src/api/chat.py` as defined in the API contract.
- [x] T017 [US3] Implement the RAG service in `backend/src/services/rag_service.py` to handle general queries, using LlamaIndex to retrieve context from Qdrant and generate an answer with OpenAI.
- [x] T018 [US3] Create a React component for the chatbot UI in `frontend/docusaurus-site/src/components/Chatbot.js`.
- [x] T019 [US3] Integrate the Chatbot component into the Docusaurus layout using swizzling, so it appears on all pages.
- [x] T020 [US3] Implement the frontend logic in the Chatbot component to call the `/chat/query` backend endpoint and display the response.

**Checkpoint**: At this point, the chatbot should be able to answer general questions about the textbook.

---

## Phase 5: User Story 4 - RAG Chatbot (Context-aware Answers) (Priority: P2)

**Goal**: Allow students to get highly context-aware answers by asking questions about selected text.

**Independent Test**: A student can select a paragraph, ask a question about it via the chatbot, and receive an answer that strictly adheres to the context of the selected text.

### Implementation for User Story 4

- [x] T021 [US4] Implement the `/chat/query_selection` endpoint in `backend/src/api/chat.py` as defined in the API contract.
- [x] T022 [US4] Extend the RAG service in `backend/src/services/rag_service.py` to handle queries with selected text, passing the selection as context to the LLM.
- [x] T023 [US4] Extend the frontend Chatbot component in `frontend/docusaurus-site/src/components/Chatbot.js` to detect text selection on the page and provide an option to "Ask Chatbot about selection".
- [x] T024 [US4] Implement the frontend logic to call the `/chat/query_selection` endpoint when a user asks a question about selected text.

**Checkpoint**: All user stories should now be independently functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories.

- [x] T025 [P] Add comprehensive logging to the backend FastAPI application.
- [x] T026 [P] Implement robust error handling for both the frontend and backend.
- [x] T027 [P] Write E2E tests for the chatbot functionality using Playwright or Cypress in `frontend/tests/`.
- [x] T028 [P] Add documentation for the backend API in the form of docstrings and comments.
- [x] T029 [P] Run `quickstart.md` validation to ensure the setup instructions are accurate.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on Setup completion. Blocks chatbot user stories (US3, US4).
- **User Stories 1 & 2 (Phase 3)**: Can start after Setup. Does not depend on Foundational.
- **User Stories 3 & 4 (Phases 4, 5)**: Depend on Foundational completion.
- **Polish (Phase 6)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **User Story 1 & 2**: Can be implemented in parallel with Foundational work.
- **User Story 3**: Depends on Foundational.
- **User Story 4**: Depends on User Story 3.

### Parallel Opportunities

- Frontend (Docusaurus) and Backend (FastAPI) setup can be done in parallel.
- Content creation (US1, US2) can be done in parallel with backend foundational work (Phase 2).
- Once the foundation is laid, different developers can work on US3 and US4, although US4 depends on US3.

---

## Implementation Strategy

### MVP First (User Stories 1, 2, 3)

1.  Complete Phase 1: Setup.
2.  Complete Phase 2: Foundational.
3.  Complete Phase 3: User Stories 1 & 2.
4.  Complete Phase 4: User Story 3.
5.  **STOP and VALIDATE**: The textbook is published and the chatbot can answer general questions.

### Incremental Delivery

1.  Complete Setup + US1/2 → Textbook is published online (Value delivered).
2.  Add Foundational + US3 → Chatbot can answer general questions (Value added).
3.  Add US4 → Chatbot can answer context-aware questions (Value enhanced).