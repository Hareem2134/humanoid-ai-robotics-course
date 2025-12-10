# Implementation Plan: Physical AI & Humanoid Robotics Textbook

**Branch**: `001-create-course-book` | **Date**: 2025-12-08 | **Spec**: [specs/001-create-course-book/spec.md](specs/001-create-course-book/spec.md)
**Input**: Feature specification from `/specs/001-create-course-book/spec.md`

## Summary

This plan outlines the implementation of a comprehensive "Physical AI & Humanoid Robotics Textbook" using Docusaurus for content delivery and GitHub Pages for deployment. It also details the development of an integrated Retrieval-Augmented Generation (RAG) chatbot, powered by FastAPI, OpenAI Agents/ChatKit SDKs, Neon Serverless Postgres, and Qdrant Cloud Free Tier, designed to answer student questions about the textbook content, including context-aware answers from selected text.

## Technical Context

**Language/Version**:
*   **Docusaurus Frontend**: JavaScript/TypeScript (Node.js v18+), Docusaurus v3.
*   **FastAPI Backend**: Python 3.10+.
*   **OpenAI SDKs**: Python.
**Primary Dependencies**:
*   **Docusaurus**: React, Node.js, Docusaurus core packages.
*   **FastAPI**: Uvicorn, OpenAI Python client, `psycopg2` or `asyncpg` (for Neon), Qdrant-client.
*   **RAG**: LlamaIndex.
**Storage**:
*   **Textbook Content**: Markdown files managed by Docusaurus.
*   **RAG Chatbot Structured Data**: Neon Serverless Postgres (for chatbot state, user interactions, or metadata).
*   **RAG Chatbot Vector Embeddings**: Qdrant Cloud Free Tier (for semantic search over textbook content).
**Testing**:
*   **Docusaurus Frontend**: Jest/React Testing Library (for custom components), Playwright/Cypress (for E2E testing of UI and navigation).
*   **FastAPI Backend**: Pytest (for unit and integration tests).
**Target Platform**:
*   **Textbook Frontend**: Web browser (deployed via GitHub Pages).
*   **FastAPI Backend**: Serverless container platform (e.g., Render, Fly.io, or AWS Fargate) for scalability and cost-efficiency.
**Project Type**: Monorepo containing a Docusaurus frontend application and a FastAPI backend service.
**Performance Goals**:
*   **SC-002**: All textbook pages load within 3 seconds on a standard broadband connection.
*   **SC-004**: RAG chatbot responds to user queries within 5 seconds (p90 latency).
**Constraints**:
*   Deployment exclusively to GitHub Pages for the Docusaurus frontend.
*   Utilization of Qdrant Cloud Free Tier, implying potential limitations on index size or query volume.
*   Strict adherence to OpenAI Agents/ChatKit SDKs for chatbot logic.
*   Exclusive use of Neon Serverless Postgres for relational data.
**Scale/Scope**:
*   Textbook: Comprehensive coverage of the "Physical AI & Humanoid Robotics" course material, including all specified modules and sections.
*   RAG Chatbot: Capable of answering questions across the entire textbook content and providing context-aware answers based on user-selected text. Initial scope does not include multi-turn conversation history beyond the immediate query.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**I. Library-First**:
*   **Evaluation**: The RAG chatbot components (vectorization, retrieval, LLM interaction) can be designed as modular libraries. The Docusaurus content can be seen as a collection of markdown files, which are essentially self-contained units.
*   **Compliance**: ✅ Compliant.

**II. CLI Interface**:
*   **Evaluation**: Docusaurus has a CLI for building and serving. FastAPI applications typically don't expose a direct CLI for their core logic, but management commands can be added. The RAG components could expose CLI for data ingestion/indexing.
*   **Compliance**: ✅ Compliant (with potential for CLI for RAG data management).

**III. Test-First (NON-NEGOTIABLE)**:
*   **Evaluation**: The plan explicitly includes testing frameworks (Jest/Pytest) for both frontend and backend. This principle will be strictly adhered to during implementation.
*   **Compliance**: ✅ Compliant.

**IV. Integration Testing**:
*   **Evaluation**: Critical for the RAG chatbot (frontend-backend communication, backend-Qdrant, backend-Neon, backend-OpenAI). Also important for Docusaurus deployment to GitHub Pages.
*   **Compliance**: ✅ Compliant.

## Project Structure

### Documentation (this feature)

```text
specs/001-create-course-book/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
frontend/
├── docusaurus-site/     # Docusaurus project root
│   ├── src/
│   │   ├── components/  # React components for custom UI (e.g., chatbot integration)
│   │   └── pages/       # Custom pages
│   ├── docs/            # Markdown files for textbook content
│   ├── blog/            # Optional blog posts
│   └── docusaurus.config.js
└── tests/               # E2E tests for Docusaurus site

backend/
├── src/
│   ├── api/             # FastAPI application endpoints
│   ├── services/        # Business logic, RAG orchestration
│   ├── models/          # Pydantic models for data validation
│   └── core/            # Core utilities, database connections
├── tests/               # Pytest unit and integration tests
└── scripts/             # Data ingestion, indexing scripts
```

**Structure Decision**: The "Web application" option is chosen, adapted for a monorepo containing a Docusaurus frontend and a FastAPI backend. This structure clearly separates the concerns of content delivery and interactive chatbot functionality.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | N/A | N/A |