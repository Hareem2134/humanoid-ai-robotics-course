---
id: 009
title: Guide User to Debug React Errors with Specifics
stage: tasks
date: 2025-12-26
surface: agent
model: gemini-pro
feature: rag-chatbot-debug
branch: master
user: (unknown)
command: (agent-internal)
labels: [ "debugging", "react", "critical-error", "guidance", "vercel" ]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - frontend/docusaurus-site/docusaurus.config.ts
  - frontend/docusaurus-site/src/contexts/AuthContext.js
  - frontend/docusaurus-site/src/theme/Layout/index.js
  - frontend/docusaurus-site/src/utils/api.js
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

Context for task generation: verify by myself that chatbot is working or not, is it showing or not? figure it what needs to be done for doing these steps and for verification

## Response snapshot

Provided explicit guidance for the user to debug the critical React errors (#418, #423) in their Docusaurus application. Instructed them to review Vercel deployment logs (T001), analyze React components (T006), and get unminified error messages (T007) by running locally or using the React error decoder. Clarified that these React errors are the primary blocker for the chatbot UI or any other application functionality.

## Outcome

- ✅ Impact: Provided detailed, actionable steps to the user to address the most critical and blocking issue (React errors), which is essential before any further progress can be made on the chatbot UI.
- 🧪 Tests: No tests were added.
- 📁 Files: Read: `frontend/docusaurus-site/src/theme/Layout/index.js`, `frontend/docusaurus-site/src/contexts/AuthContext.js`, `frontend/docusaurus-site/src/utils/api.js`, `frontend/docusaurus-site/docusaurus.config.ts`.
- 🔁 Next prompts: User needs to provide the unminified error messages or details from Vercel logs after following the instructions.
- 🧠 Reflection: Repeatedly clarifying the root cause and providing highly specific, actionable debugging steps is crucial when a user is stuck on a fundamental issue.

## Evaluation notes (flywheel)

- Failure modes observed: User confusion despite prior task list generation. Required direct, step-by-step guidance.
- Graders run and results (PASS/FAIL): (not applicable)
- Prompt variant (if applicable): (not applicable)
- Next experiment (smallest change to try): (not applicable)
