---
feature: "Run the Application Correctly and Improve UI"
version: "1.0"
---

## Overview

Thank you for the log. The error message `[ECONNREFUSED]` is the key we needed! It tells us that your frontend (on port 3001) is trying to talk to your backend (on port 8000), but the connection is being refused.

This almost always means one thing: **the backend server is not running.**

I know you mentioned that you started it, but it's possible it crashed or was stopped. This `tasks.md` will walk you through the correct way to run both servers at the same time and then we'll polish the UI.

---

## Phase 1: Running the Full Stack

**Goal:** To get both the backend and frontend servers running correctly and communicating with each other.

### Tasks

- [ ] T001 [US1] **Stop Everything:** Close any running terminals to ensure you are starting fresh.
- [ ] T002 [US1] **Start the Backend Server:**
    -   Open a **new** terminal.
    -   Navigate to the `backend` directory.
    -   Run the command: `uvicorn src.main:app --reload`
    -   You should see a message like `Uvicorn running on http://127.0.0.1:8000`.
    -   **Leave this terminal open and running.**
- [ ] T003 [US1] **Start the Frontend Server:**
    -   Open a **second, new** terminal.
    -   Navigate to the `frontend/docusaurus-site` directory.
    -   Run the command: `npm start`
- [ ] T004 [US1] **Test the Chatbot:**
    -   Open your browser to the address provided by the frontend server (e.g., `http://localhost:3001`).
    -   The "Something went wrong!" error should now be gone, and the chatbot should be fully functional.

---

## Phase 2: UI Polish

**Goal:** To improve the look and feel of the chatbot UI.

### Tasks

- [ ] T005 [US2] **Set Default Font Color:**
    -   Open `frontend/docusaurus-site/src/theme/Chatbot.module.css`.
    -   Add a `color: #000;` property to the `.chatbotHistory` class to ensure the text is black.
- [ ] T006 [US2] **Add a Chatbot Header:**
    -   In `frontend/docusaurus-site/src/theme/Chatbot.js`, add a header div inside the `.chatbotContainer`.
    -   In `frontend/docusaurus-site/src/theme/Chatbot.module.css`, add styling for the new header class. For example:
        ```css
        .chatbotHeader {
          background-color: #007bff;
          color: white;
          padding: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          text-align: center;
        }
        ```
- [ ] T007 [US2] **Improve Input Form:**
    -   In `frontend/docusaurus-site/src/theme/Chatbot.module.css`, adjust the padding and margins for `.chatbotForm`, `.chatbotInput`, and `.chatbotSubmit` to give them a bit more space.