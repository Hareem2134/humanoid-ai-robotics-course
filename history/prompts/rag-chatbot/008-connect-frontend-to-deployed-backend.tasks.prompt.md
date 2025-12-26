---
id: 008
title: Connect frontend to deployed backend
stage: tasks
date: 2025-12-26
surface: agent
model: gemini-pro
feature: rag-chatbot
branch: main
user: local
command: $ARGUMENTS
labels: []
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - tasks.md
tests:
 - 
---

## Prompt

$ARGUMENTS

Context for task generation: on this link https://humanoid-ai-robotics-course.onrender.com/ {"Hello":"World"} is showing, it means the database is live, so tell me how to see the chatbot? the chatbot isnt showing on vercel link: https://humanoid-ai-robotics-course.vercel.app/

## Response snapshot

# Connect Frontend to Deployed Backend Tasks

This document outlines the tasks required to connect the Docusaurus frontend on Vercel to the deployed backend on Render.

## Phase 1: Frontend Configuration

- [ ] T001 Create a new file named `.env.local` in the `frontend/docusaurus-site` directory.
- [ ] T002 Add the following line to the `frontend/docusaurus-site/.env.local` file, replacing the URL with your actual backend URL:
  ```
  REACT_APP_BACKEND_API_URL=https://humanoid-ai-robotics-course.onrender.com
  ```
- [ ] T003 [P] Modify `frontend/docusaurus-site/src/components/Chatbot.js` to use the new environment variable.
- [ ] T004 In `frontend/docusaurus-site/src/components/Chatbot.js`, find the line that starts with `const endpoint = ...` and prepend the environment variable to the URL.

  **Before:**
  ```javascript
  const endpoint = selectedText ? '/api/v1/chat/query_selection' : '/api/v1/chat/query';
  ```

  **After:**
  ```javascript
  const backendApiUrl = process.env.REACT_APP_BACKEND_API_URL;
  const endpoint = selectedText ? `${backendApiUrl}/api/v1/chat/query_selection` : `${backendApiUrl}/api/v1/chat/query`;
  ```

## Phase 2: Vercel Configuration and Deployment

- [ ] T005 Log in to your Vercel account and navigate to your project settings.
- [ ] T006 In the "Environment Variables" section, add a new variable with the name `REACT_APP_BACKEND_API_URL` and the value `https://humanoid-ai-robotics-course.onrender.com`.
- [ ] T007 Trigger a new deployment of your frontend on Vercel.

## Phase 3: Verification

- [ ] T008 Once the deployment is complete, open your Vercel app.
- [ ] T009 Open the chatbot and try sending a message to verify that it's working correctly.

## Outcome

- ✅ Impact: Created a `tasks.md` file to guide the user in connecting their frontend to the deployed backend.
- 🧪 Tests: No tests were run.
- 📁 Files: `tasks.md`
- 🔁 Next prompts: null
- 🧠 Reflection: The user correctly identified that the backend was live, but didn't know how to connect the frontend. Using environment variables is the standard and most flexible way to handle this. The PHR script continues to fail.

## Evaluation notes (flywheel)

- Failure modes observed: PHR script failure.
- Graders run and results (PASS/FAIL): null
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
