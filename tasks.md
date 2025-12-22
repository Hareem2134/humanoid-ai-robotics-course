---
description: "Task list for fixing homepage links"
---

# Tasks: Fix Homepage Links

**Input**: `frontend/docusaurus-site/src/pages/index.js`
**Prerequisites**: None

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 No setup tasks needed, as we are editing an existing file.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [x] T002 No foundational tasks.

---

## Phase 3: User Story 1 - Fix Homepage Links (Priority: P1) 🎯 MVP

**Goal**: As a user, I want the links on the homepage to take me to the correct and specific content within the book, so that I can easily navigate the course material.

**Independent Test**: Manually verify that all links on the homepage work as expected and navigate to the correct sections of the documentation.

### Implementation for User Story 1

- [x] T003 [US1] In `frontend/docusaurus-site/src/pages/index.js`, add a leading slash to the link for 'ROS 2 Architecture' in the `modules` constant.
- [x] T004 [US1] In `frontend/docusaurus-site/src/pages/index.js`, update the links in the `sections` array for "Module 1" to include URL fragments that point to the correct headings within the markdown files.
- [x] T005 [US1] In `frontend/docusaurus-site/src/pages/index.js`, update the links in the `sections` array for "Module 2" to include URL fragments.
- [x] T006 [US1] In `frontend/docusaurus-site/src/pages/index.js`, update the links in the `sections` array for "Module 3" to include URL fragments.
- [x] T007 [US1] In `frontend/docusaurus-site/src/pages/index.js`, update the links in the `sections` array for "Module 4" to include URL fragments.
- [x] T008 [US1] In `frontend/docusaurus-site/src/pages/index.js`, verify that the links in the `HomepageQuickLinks` component are correct and add URL fragments if necessary.

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---
