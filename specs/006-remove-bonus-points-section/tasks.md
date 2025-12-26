---
description: "Task list for feature implementation: Remove Bonus Points Section"
---

# Tasks: Remove Bonus Points Section

**Input**: `specs/006-remove-bonus-points-section/plan.md`, `specs/006-remove-bonus-points-section/spec.md`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: No specific setup is required for this feature. All tasks are contained within the user story.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: No foundational tasks are required.

---

## Phase 3: User Story 1 - Remove Bonus Points Opportunity (Priority: P1) 🎯 MVP

**Goal**: To completely remove the bonus points page and any references to it from the course book.

**Independent Test**: After implementation, the Docusaurus site should build successfully, and the "Bonus Points" page and its sidebar link should no longer be present.

### Implementation for User Story 1

- [ ] T001 [US1] Delete the file `frontend/docusaurus-site/docs/08-assessments/bonus-points.md`.
- [ ] T002 [US1] Edit the `frontend/docusaurus-site/sidebars.js` file to remove the entry that links to the now-deleted `bonus-points.md` file.
- [ ] T003 [US1] Run the Docusaurus development server to verify that the "Bonus Points" page and sidebar link are gone and the site works correctly.

---

## Dependencies & Execution Order

### Phase Dependencies

- **User Story 1 (Phase 3)** can start immediately.

### Within User Story 1

1.  **T001** and **T002** can be performed in any order, but both must be completed before verification.
2.  **T003** is the final verification step.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1.  Complete all tasks for User Story 1.
2.  Validate by running the local Docusaurus server and confirming the removal of the page and link.
