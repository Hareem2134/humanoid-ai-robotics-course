# Implementation Plan: RAG Chatbot

**Branch**: `002-rag-chatbot` | **Date**: 2025-12-12 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-create-course-book/spec.md`

## Summary

This plan outlines the implementation of a Retrieval-Augmented Generation (RAG) chatbot for the Physical AI & Humanoid Robotics Textbook. The chatbot will be embedded in the Docusaurus site and will answer user questions based on the book's content, with a backend powered by FastAPI, Neon, Qdrant, and OpenAI.

## Technical Context

**Language/Version**: Python 3.11, TypeScript (for Docusaurus)
**Primary Dependencies**: FastAPI, uvicorn, python-dotenv, LlamaIndex, qdrant-client, psycopg2-binary, openai, React
**Storage**: Neon Serverless Postgres, Qdrant Cloud Free Tier
**Testing**: pytest, Playwright
**Target Platform**: Web
**Project Type**: Web application (frontend + backend)
**Constraints**: Must use the specified technology stack.

## Constitution Check

The project will adhere to the principles of Test-First development and will focus on creating a simple, yet robust, implementation.

## Project Structure

### Documentation (this feature)

```text
specs/001-create-course-book/
├── spec.md              # The feature specification
├── plan.md              # This file
└── tasks.md             # The detailed tasks for implementation
```

### Source Code (repository root)

```text
backend/
├── src/
│   ├── api/
│   │   └── chat.py
│   ├── core/
│   │   ├── database.py
│   │   ├── openai.py
│   │   └── qdrant.py
│   └── services/
│       └── rag_service.py
└── tests/

frontend/
├── docusaurus-site/
│   ├── src/
│   │   ├── components/
│   │   │   └── Chatbot.js
│   │   └── pages/
│   └── tests/
```

**Structure Decision**: The project will use a monorepo with a `frontend` directory for the Docusaurus site and a `backend` directory for the FastAPI application. This separation of concerns will allow for independent development and deployment of the frontend and backend.
