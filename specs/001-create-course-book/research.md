# Research Findings: Physical AI & Humanoid Robotics Textbook

## RAG Framework Orchestration

**Decision**: LlamaIndex

**Rationale**:
LlamaIndex is chosen for its strong focus on data-centric RAG, excelling in data ingestion, indexing, and querying for connecting LLMs to external data sources. Its high-level APIs and built-in query engines offer a simpler and quicker setup for efficient document retrieval and summarization, which aligns well with the primary goal of answering user questions about the textbook's content. While LangChain offers broader orchestration capabilities, LlamaIndex's specialization in RAG provides a more optimized solution for the initial scope of this project.

**Alternatives Considered**:
*   **LangChain**: Considered for its extensive orchestration and workflow capabilities, modular framework for chaining components, and advanced memory management. It would be a strong contender if the chatbot's scope expanded to include complex, multi-turn conversations or integration with various external tools beyond simple Q&A. However, its steeper learning curve and broader focus were less ideal for the initial, data-centric RAG requirement.
