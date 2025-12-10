# Data Model: Physical AI & Humanoid Robotics Textbook

This document outlines the key entities and their relationships for the Physical AI & Humanoid Robotics Textbook and its integrated RAG Chatbot.

## Entities

### 1. Textbook

Represents the entire course material.

*   **Attributes**:
    *   `id` (UUID): Unique identifier for the textbook.
    *   `title` (String): The main title of the textbook.
    *   `description` (String, Optional): A brief overview of the textbook.
    *   `author_id` (UUID): Reference to the author/creator of the textbook.
    *   `status` (Enum: `draft`, `published`, `archived`): Current publication status.
    *   `created_at` (Timestamp): Date and time of creation.
    *   `updated_at` (Timestamp): Last date and time of modification.
*   **Relationships**: Has many Chapters.

### 2. Chapter

Represents a major division of the textbook.

*   **Attributes**:
    *   `id` (UUID): Unique identifier for the chapter.
    *   `textbook_id` (UUID): Foreign key referencing the parent Textbook.
    *   `title` (String): The title of the chapter.
    *   `order` (Integer): The display order of the chapter within the textbook.
    *   `created_at` (Timestamp): Date and time of creation.
    *   `updated_at` (Timestamp): Last date and time of modification.
*   **Relationships**: Belongs to one Textbook. Has many Sections.

### 3. Section

Represents a content page within a chapter.

*   **Attributes**:
    *   `id` (UUID): Unique identifier for the section.
    *   `chapter_id` (UUID): Foreign key referencing the parent Chapter.
    *   `title` (String): The title of the section.
    *   `content` (Text): The main content of the section, stored in Markdown format.
    *   `order` (Integer): The display order of the section within the chapter.
    *   `created_at` (Timestamp): Date and time of creation.
    *   `updated_at` (Timestamp): Last date and time of modification.
*   **Relationships**: Belongs to one Chapter.

### 4. RAGChatbot (Conceptual Entity)

Represents the interactive AI assistant. This is more of a functional component than a data entity with persistent storage, but its operational data might be stored.

*   **Attributes**:
    *   `query_input` (Text): User's question.
    *   `selected_text` (Text, Optional): Text selected by the user for context.
    *   `response_output` (Text): Chatbot's answer.
    *   `references` (Array of Strings/URLs): Links to relevant sections in the textbook.
    *   `timestamp` (Timestamp): Time of interaction.
    *   `user_id` (UUID, Optional): Reference to the interacting user.
*   **Relationships**: Interacts with VectorStore and KnowledgeBase.

### 5. VectorStore (Qdrant)

Stores vector embeddings of textbook content for RAG.

*   **Attributes**:
    *   `vector_id` (UUID): Unique identifier for the vector.
    *   `embedding` (Vector): Numerical representation of a text chunk.
    *   `metadata` (JSONB): Contains source information (e.g., `textbook_id`, `chapter_id`, `section_id`, `text_chunk_id`, `page_number`).
*   **Relationships**: Stores embeddings derived from KnowledgeBase content.

### 6. KnowledgeBase (Neon Postgres)

Stores raw text chunks and metadata of the textbook content, serving as the source for vectorization.

*   **Attributes**:
    *   `chunk_id` (UUID): Unique identifier for the text chunk.
    *   `text_content` (Text): A segment of the textbook content.
    *   `textbook_id` (UUID): Foreign key to the Textbook.
    *   `chapter_id` (UUID): Foreign key to the Chapter.
    *   `section_id` (UUID): Foreign key to the Section.
    *   `order_in_section` (Integer): Order of the chunk within its section.
    *   `created_at` (Timestamp): Date and time of ingestion.
*   **Relationships**: Provides source text for VectorStore.

## Relationships Overview

*   `Textbook` 1 -- M `Chapter`
*   `Chapter` 1 -- M `Section`
*   `KnowledgeBase` M -- M `VectorStore` (via embedding process)
*   `RAGChatbot` interacts with `VectorStore` and `KnowledgeBase` for retrieval and context.
