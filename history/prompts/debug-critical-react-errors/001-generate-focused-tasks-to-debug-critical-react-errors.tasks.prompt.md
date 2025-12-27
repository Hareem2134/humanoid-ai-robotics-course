---
id: 001
title: Generate Focused Tasks to Debug Critical React Errors
stage: tasks
date: 2025-12-26
surface: agent
model: gemini-pro
feature: debug-critical-react-errors
branch: master
user: (unknown)
command: (agent-internal)
labels: [ "debugging", "react", "critical-error", "tasks-generation" ]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - specs/debug-critical-react-errors/tasks.md
tests:
  - (none)
---

## Prompt

---
description: Generate an actionable, dependency-ordered tasks.md for the feature based on available design artifacts.
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

1. **Setup**: Run `.specify/scripts/powershell/check-prerequisites.ps1 -Json` from repo root and parse FEATURE_DIR and AVAILABLE_DOCS list. All paths must be absolute. For single quotes in args like "I'm Groot", use escape syntax: e.g 'I'\''m Groot' (or double-quote if possible: "I'm Groot").

2. **Load design documents**: Read from FEATURE_DIR:
   - **Required**: plan.md (tech stack, libraries, structure), spec.md (user stories with priorities)
   - **Optional**: data-model.md (entities), contracts/ (API endpoints), research.md (decisions), quickstart.md (test scenarios)
   - Note: Not all projects have all documents. Generate tasks based on what's available.

3. **Execute task generation workflow**:
   - Load plan.md and extract tech stack, libraries, project structure
   - Load spec.md and extract user stories with their priorities (P1, P2, P3, etc.)
   - If data-model.md exists: Extract entities and map to user stories
   - If contracts/ exists: Map endpoints to user stories
   - If research.md exists: Extract decisions for setup tasks
   - Generate tasks organized by user story (see Task Generation Rules below)
   - Generate dependency graph showing user story completion order
   - Create parallel execution examples per user story
   - Validate task completeness (each user story has all needed tasks, independently testable)

4. **Generate tasks.md**: Use `.specify.specify/templates/tasks-template.md` as structure, fill with:
   - Correct feature name from plan.md
   - Phase 1: Setup tasks (project initialization)
   - Phase 2: Foundational tasks (blocking prerequisites for all user stories)
   - Phase 3+: One phase per user story (in priority order from spec.md)
   - Each phase includes: story goal, independent test criteria, tests (if requested), implementation tasks
   - Final Phase: Polish & cross-cutting concerns
   - All tasks must follow the strict checklist format (see Task Generation Rules below)
   - Clear file paths for each task
   - Dependencies section showing story completion order
   - Parallel execution examples per story
   - Implementation strategy section (MVP first, incremental delivery)

5. **Report**: Output path to generated tasks.md and summary:
   - Total task count
   - Task count per user story
   - Parallel opportunities identified
   - Independent test criteria for each story
   - Suggested MVP scope (typically just User Story 1)
   - Format validation: Confirm ALL tasks follow the checklist format (checkbox, ID, labels, file paths)

Context for task generation: i couldnt able to understand anything that why the chatbot isnt showing even though the backend on render is live and working /sp.tasks i couldnt able to understand anything that why the chatbot isnt showing even though the backend on render is live and working /sp.tasks i couldnt able to understand anything that why the chatbot isnt showing even though the backend on render is live and working /sp.tasks i couldnt able to understand anything that why the chatbot isnt showing even though the backend on render is live and working /sp.tasks i couldnt able to understand anything that why the chatbot isnt showing even though the backend on render is live and working

## Response snapshot

Generated a new, highly focused tasks.md file (`specs/debug-critical-react-errors/tasks.md`) to guide the user through resolving critical React rendering errors, which are currently blocking the chatbot UI from appearing.

## Outcome

- ✅ Impact: Provided a clear, step-by-step plan specifically designed to unblock the user from the critical React errors, which are the root cause of the current issue.
- 🧪 Tests: No tests were added.
- 📁 Files: Created 1 new file: `specs/debug-critical-react-errors/tasks.md`.
- 🔁 Next prompts: User needs to follow the new `tasks.md` to debug and resolve the React errors.
- 🧠 Reflection: When a user struggles to follow complex or evolving instructions, a new, highly simplified and focused task list can be more effective. The user's repeated `/sp.tasks` suggested they were looking for a fresh, explicit plan.

## Evaluation notes (flywheel)

- Failure modes observed: User confusion requiring a complete re-framing of the immediate tasks.
- Graders run and results (PASS/FAIL): (not applicable)
- Prompt variant (if applicable): (not applicable)
- Next experiment (smallest change to try): (not applicable)
