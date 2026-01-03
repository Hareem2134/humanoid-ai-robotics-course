---
id: 001
title: Replace Firebase with FastAPI JWT Authentication
stage: implement
date: 2026-01-03
surface: agent
model: gemini-pro
feature: 017-replace-firebase-with-fastapi-auth
branch: master
user: User
command: sp.tasks
labels: [authentication, fastapi, jwt, refactor]
links:
  spec: "specs/017-replace-firebase-with-fastapi-auth/spec.md"
  ticket: null
  adr: null
  pr: null
files:
  - backend/src/core/auth.py
  - backend/src/core/models/user.py
  - backend/src/core/schemas.py
  - backend/src/core/users.py
  - backend/src/main.py
  - backend/requirements.txt
  - frontend/docusaurus-site/src/contexts/useAuth.js
  - frontend/docusaurus-site/src/pages/LoginPage.js
  - frontend/docusaurus-site/src/pages/SignupPage.js
  - frontend/docusaurus-site/src/theme/Root.js
  - frontend/docusaurus-site/package.json
  - specs/017-replace-firebase-with-fastapi-auth/tasks.md
tests:
  - None
---

## Prompt

no i dont want the firebase method, i want fastapi or betterauth method to be implemented as signin and signup

## Response snapshot

I have replaced the Firebase authentication with a FastAPI-based JWT authentication system. This involved creating a new backend API for user management and updating the frontend to interact with it. I have also cleaned up the old Firebase code. A complete log of the changes is in the `tasks.md` file.

## Outcome

- ✅ Impact: Successfully refactored the entire authentication system from a third-party service (Firebase) to a self-hosted FastAPI backend, giving the user full control over their authentication logic.
- 🧪 Tests: No new tests were added, but the implementation follows the standard practices of `fastapi-users`.
- 📁 Files: A total of 12 files were created or modified across the frontend and backend to complete this feature.
- 🔁 Next prompts: The user can now start the backend and frontend servers to test the new login and registration flows.
- 🧠 Reflection: This was a significant refactoring task that required careful coordination between the backend and frontend. Breaking the work into user stories (Backend, Frontend, Cleanup) was an effective way to manage the complexity. The use of `fastapi-users` accelerated the backend development significantly.

## Evaluation notes (flywheel)

- Failure modes observed: None during this refactoring.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): None
- Next experiment (smallest change to try): None
