# Feature: Integrated RAG Chatbot

## Phase 1: Setup

- [ ] T001 [P] Set up Python virtual environment in `backend/.venv`
- [ ] T002 [P] Install backend dependencies from `backend/requirements.txt`
- [ ] T003 [P] Configure Neon Serverless Postgres and Qdrant Cloud credentials in `backend/.env`
- [ ] T004 [P] Create database schema for storing conversation history in `backend/src/core/database.py`

## Phase 2: Foundational

- [ ] T005 Create data ingestion script in `backend/scripts/ingestion_script.py` to load book content, chunk it, and store embeddings in Qdrant
- [ ] T006 Implement core RAG service in `backend/src/services/rag_service.py` with a method to query Qdrant for relevant context
- [ ] T007 Implement OpenAI chat completion service in `backend/src/core/openai.py`

## Phase 3: User Story 1 - General Q&A

**User Story (US1):** As a user, I want to ask a question to the chatbot and get an answer based on the entire book's content.

**Independent Test Criteria:**
- The chatbot should be able to answer a question about the book's content.
- The chatbot should respond with "I don't know" if the answer is not in the book.

**Tasks:**

- [ ] T008 [US1] Create a FastAPI endpoint in `backend/src/api/chat.py` that accepts a user's question
- [ ] T009 [US1] In the chat endpoint, use `rag_service` to retrieve relevant context from Qdrant
- [ ] T010 [US1] In the chat endpoint, use `openai_service` to generate an answer based on the retrieved context
- [ ] T011 [US1] Implement conversation history storage in the chat endpoint using the database
- [ ] T012 [P] [US1] Create a simple UI for the chatbot in `frontend/docusaurus-site/src/theme/Chatbot.js`
- [ ] T013 [US1] Connect the chatbot UI to the FastAPI backend

## Phase 4: User Story 2 - Selected-Text Q&A

**User Story (US2):** As a user, I want to select a portion of text in the book and ask a question specifically about that selection.

**Independent Test Criteria:**
- The chatbot should be able to answer a question based only on the selected text.
- The UI should allow the user to select text and ask a question.

**Tasks:**

- [ ] T014 [US2] Create a new FastAPI endpoint in `backend/src/api/chat.py` for selected-text Q&A
- [ ] T015 [US2] In the new endpoint, accept the selected text and the user's question
- [ ] T016 [US2] In the new endpoint, use `openai_service` to answer the question based on the provided text
- [ ] T017 [P] [US2] Implement a mechanism on the frontend to capture the selected text in `frontend/docusaurus-site/src/theme/Chatbot.js`
- [ ] T018 [US2] When a user asks a question with selected text, call the new endpoint

<h2>Phase 5: Polish & Cross-Cutting Concerns</h2>

- [ ] T019 [P] Enhance the chatbot UI with features like loading indicators and error messages
- [ ] T020 [P] Add comprehensive logging to the backend services
- [ ] T021 [P] Write unit tests for the backend services
- [ ] T022 [P] Create a `README.md` for the backend with setup and usage instructions
- [ ] T023 [P] Create a `README.md` for the frontend with setup and usage instructions

<h2>Dependencies</h2>

- US2 depends on US1's backend infrastructure (OpenAI service).

<h2>Parallel Execution</h2>

- Backend and frontend work can be parallelized to a large extent.
- Within each user story, UI and API work can be done in parallel.

<h2>Implementation Strategy</h2>

- The MVP will be the implementation of User Story 1.
- User Story 2 will be implemented after the MVP is complete.
- Polish and cross-cutting concerns will be addressed throughout the development process.
