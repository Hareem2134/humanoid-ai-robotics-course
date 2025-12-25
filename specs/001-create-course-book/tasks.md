# Tasks for Verifying API Connections

**Feature**: [RAG Chatbot](spec.md)
**Branch**: `002-rag-chatbot`
**Effort**: Small

This document outlines the tasks required to verify the connections to Qdrant, OpenAI, and Neon Server APIs.

## Phase 1: Environment Variable Check

- [ ] T001 Verify that `OPENAI_API_KEY`, `QDRANT_URL`, `QDRANT_API_KEY`, and `NEON_DATABASE_URL` are correctly set in `backend/.env`.
      File: `backend/.env`

## Phase 2: OpenAI API Verification

- [ ] T002 Create a temporary Python script (`backend/tests/temp_openai_test.py`) to initialize an OpenAI client and make a simple test call (e.g., list models or create a small completion).
      File: `backend/tests/temp_openai_test.py`
- [ ] T003 Execute `backend/tests/temp_openai_test.py` and verify that the call is successful and returns a valid response.
      Command: `python backend/tests/temp_openai_test.py`

## Phase 3: Qdrant API Verification

- [ ] T004 Create a temporary Python script (`backend/tests/temp_qdrant_test.py`) to initialize a Qdrant client and perform a simple operation (e.g., get collection info or list collections).
      File: `backend/tests/temp_qdrant_test.py`
- [ ] T005 Execute `backend/tests/temp_qdrant_test.py` and verify that the operation is successful.
      Command: `python backend/tests/temp_qdrant_test.py`

## Phase 4: Neon Server (Postgres) API Verification

- [ ] T006 Create a temporary Python script (`backend/tests/temp_neon_test.py`) to establish a connection to the Neon database and execute a simple query (e.g., `SELECT 1;` or check existing tables).
      File: `backend/tests/temp_neon_test.py`
- [ ] T007 Execute `backend/tests/temp_neon_test.py` and verify that the connection is successful and the query returns a result.
      Command: `python backend/tests/temp_neon_test.py`

## Phase 5: Cleanup

- [ ] T008 Remove temporary test scripts: `backend/tests/temp_openai_test.py`, `backend/tests/temp_qdrant_test.py`, `backend/tests/temp_neon_test.py`.
