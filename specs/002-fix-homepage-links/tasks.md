# Tasks: Fix Homepage Links

**Input**: Design documents from `/specs/002-fix-homepage-links/`
**Prerequisites**: plan.md, spec.md

## Phase 1: Setup (Analysis)

**Purpose**: Analyze the current state of the homepage to identify broken links.

- [ ] T001 Identify the homepage component file. Based on the plan, this is likely `frontend/docusaurus-site/src/pages/index.tsx` or `index.js`. Confirm the exact file.
- [ ] T002 Read the content of the homepage component file to locate the link elements.
- [ ] T003 Read the content of `frontend/docusaurus-site/sidebars.js` to understand the valid documentation paths.
- [ ] T004 Create a list of the current `href` values on the homepage and the corrected paths they should point to.

---

## Phase 2: User Story 1 - Correct Homepage Navigation (Priority: P1) 🎯 MVP

**Goal**: As a user, I want to click on the main navigation links on the homepage so that I am taken to the correct content pages without seeing a 404 error.

**Independent Test**: Run the Docusaurus development server (`npm run start` in `frontend/docusaurus-site`), navigate to the homepage, and click every link in the main content area. Each link should resolve to the correct page.

### Implementation for User Story 1

- [ ] T005 [US1] [P] Modify the link for "Introduction" in `frontend/docusaurus-site/src/pages/index.tsx` to point to the correct document path.
- [ ] T006 [US1] [P] Modify the link for "ROS 2" in `frontend/docusaurus-site/src/pages/index.tsx` to point to the correct document path.
- [ ] T007 [US1] [P] Modify the link for "Gazebo and Unity" in `frontend/docusaurus-site/src/pages/index.tsx` to point to the correct document path.
- [ ] T008 [US1] [P] Modify the link for "NVIDIA Isaac" in `frontend/docusaurus-site/src/pages/index.tsx` to point to the correct document path.
- [ ] T009 [US1] [P] Modify the link for "VLA" in `frontend/docusaurus-site/src/pages/index.tsx` to point to the correct document path.
- [ ] T010 [US1] [P] Modify any other remaining broken links identified in Phase 1 in `frontend/docusaurus-site/src/pages/index.tsx`.
- [ ] T011 [US1] After all modifications, run the local development server and perform the independent test procedure to verify all links are fixed.

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently.

---

## Phase 3: Polish & Cross-Cutting Concerns

**Purpose**: Final cleanup and documentation.

- [ ] T012 Code cleanup and refactoring in `frontend/docusaurus-site/src/pages/index.tsx`.
- [ ] T013 Add a comment to the homepage component to briefly explain the link structure for future developers.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Must be completed first to inform the implementation.
- **User Story 1 (Phase 2)**: Depends on the analysis from Phase 1.
- **Polish (Phase 3)**: Depends on the completion of User Story 1.

### Parallel Opportunities

- The tasks within Phase 2 (T005-T010) are marked with `[P]` because they modify different parts of the same file but are logically independent changes. They can be done in quick succession or in parallel if a team was working on it (though for a single developer, they will be sequential).

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1.  Complete Phase 1: Setup & Analysis.
2.  Complete Phase 2: User Story 1.
3.  **STOP and VALIDATE**: Test User Story 1 independently by running the site locally and clicking all fixed links.
4.  Optionally, complete Phase 3 for cleanup.
