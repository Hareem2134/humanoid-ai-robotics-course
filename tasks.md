---
feature: "Conversation History"
version: "1.0"
---

## Overview

This document outlines the tasks required to implement a conversation history feature for the chatbot. This will allow the chatbot to remember the context of the current conversation and provide more relevant, conversational answers.

## Implementation Strategy

The implementation is divided into three phases:
1.  **Backend - Database and Models:** We will first update the database schema to be able to store conversations and messages.
2.  **Backend - API and Service Layer:** We will then update the backend logic to use the conversation history when generating responses.
3.  **Frontend - State and UI:** Finally, we will update the frontend to manage the conversation state and add the necessary UI elements.

---

## Phase 1: Backend - Database and Models

**Goal:** To create the necessary database tables to store conversation history.

**Independent Test Criteria:**
*   New `conversations` and `messages` tables should be created in the database.

### Tasks

- [ ] T001 [US1] In `backend/src/core/models/`, create a new file `conversation.py` to define the `Conversation` and `Message` SQLAlchemy models.
    -   The `Conversation` model should have an `id` (UUID), a `user_id` (foreign key to the user), and a `created_at` timestamp.
    -   The `Message` model should have an `id`, a `conversation_id` (foreign key to the conversation), a `sender` (string, e.g., 'user' or 'bot'), a `text` (the message content), and a `created_at` timestamp.
- [ ] T002 [US1] In `backend/src/core/database.py`, modify the `create_tables` function to include the new `Conversation` and `Message` models, so that the tables are created when the application starts.
- [ ] T003 [US1] In `backend/src/core/database.py`, create new functions `create_conversation(user_id)` and `get_conversation_history(conversation_id)`.

---

## Phase 2: Backend - API and Service Layer

**Goal:** To update the backend logic to use the conversation history.

**Independent Test Criteria:**
*   The `/api/chat/query` endpoint should be able to take a `conversation_id` and use the history of that conversation to generate a response.

### Tasks

- [ ] T004 [US2] In `backend/src/api/chat.py`, update the `QueryRequest` model to include an optional `conversation_id`.
- [ ] T005 [US2] In `backend/src/api/chat.py`, modify the `chat_query` endpoint to:
    -   If a `conversation_id` is provided, retrieve the conversation history from the database.
    -   If no `conversation_id` is provided, create a new conversation and return the new `conversation_id` in the response.
- [ ] T006 [US2] In `backend/src/services/rag_service.py`, update the `get_rag_response` method to accept the conversation history as an argument.
- [ ] T007 [US2] In `backend/src/services/rag_service.py`, modify the prompt template to include the conversation history, so that the LLM has the full context of the dialogue.

---

## Phase 3: Frontend - State and UI

**Goal:** To update the frontend to manage conversation state and add the necessary UI elements.

**Independent Test Criteria:**
*   The chatbot should maintain the context of the conversation across multiple interactions.
*   The user should be able to start a new chat, which clears the history.

### Tasks

- [ ] T008 [US3] In `frontend/docusaurus-site/src/theme/Chatbot.js`, add a new state variable for the `conversation_id`.
- [ ] T009 [US3] In `frontend/docusaurus-site/src/theme/Chatbot.js`, when the component first loads, if there is no `conversation_id`, make a request to the backend to create a new conversation.
- [ ] T010 [US3] In `frontend/docusaurus-site/src/theme/Chatbot.js`, include the `conversation_id` in all requests to the `/api/chat/query` endpoint.
- [ ] T011 [US3] Add a "New Chat" button to the chatbot UI.
- [ ] T012 [US3] When the "New Chat" button is clicked, clear the local chat history and the `conversation_id` state, and then create a new conversation with the backend.