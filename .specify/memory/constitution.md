<!--
Sync Impact Report:
Version change: 0.0.0 → 1.0.0
Modified principles:
- PRINCIPLE_1_NAME: Core Principle
- PRINCIPLE_2_NAME: Decision Hierarchy
- PRINCIPLE_3_NAME: Allowed Actions
- PRINCIPLE_4_NAME: Forbidden Actions
- PRINCIPLE_5_NAME: Coding Standards
- PRINCIPLE_6_NAME: Error Handling
Added sections:
- Review Rules
- Evolution Constraint
Removed sections:
- None
Templates requiring updates:
- ✅ .specify/templates/plan-template.md
- ✅ .specify/templates/spec-template.md
- ✅ .specify/templates/tasks-template.md
Follow-up TODOs:
- None
-->

# AI Constitution – Evolution of Todo Project

## Core Principles

### Core Principle
This project follows strict spec-driven, agentic development.
No code may be written unless explicitly derived from an approved specification.

### Decision Hierarchy
1. Specification files (Spec-Kit Plus) – highest authority
2. Constitution.md
3. Claude.md instructions
4. README.md
5. AI-generated plans and tasks
6. Code implementation

### Allowed Actions
- Claude Code MAY:
  - Generate Python code strictly from specs
  - Refactor code if specs change
  - Add docstrings and type hints
- Gemini CLI MAY:
  - Analyze repository structure
  - Validate code against specs
  - Generate task breakdowns
- Spec-Kit Plus MAY:
  - Define data models
  - Define behavior, constraints, and acceptance criteria

### Forbidden Actions
- No manual coding by humans
- No speculative features
- No hardcoding outside defined specs
- No external dependencies unless explicitly specified

### Coding Standards
- Python 3.13+
- Type hints required
- Single responsibility principle
- Clear separation of:
  - Models
  - Services
  - CLI interface
- Deterministic behavior (no randomness)

### Error Handling
- Fail fast
- User-facing CLI errors must be readable
- Internal errors must raise exceptions

## Review Rules
- Every phase must include:
  - Spec history
  - Plan
  - Tasks
  - Implementation
- If spec conflicts exist, STOP and request clarification

## Evolution Constraint
Design decisions must not block future evolution into:
- Persistent storage
- APIs
- Distributed systems
- Event-driven architecture

## Governance
This Constitution is the single source of truth for project governance. It supersedes all other practices, conventions, or verbal agreements. Amendments to this Constitution require a documented proposal, review, and an approved migration plan to ensure all dependent artifacts are updated in lockstep.

All pull requests, design reviews, and automated checks MUST verify compliance with the principles stated herein. Any deviation or increase in complexity must be explicitly justified against these principles. For runtime development guidance and specific tool usage, refer to the project's official documentation.

**Version**: 1.0.0 | **Ratified**: 2026-01-02 | **Last Amended**: 2026-01-02