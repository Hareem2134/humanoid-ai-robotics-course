---
feature: "Configure Neon Database Connection"
version: "1.0"
---

## Overview

This document provides a step-by-step guide to correctly configure the database connection for the backend server using your Neon database. It will clarify the relationship between Neon and PostgreSQL and show you exactly where to find the correct connection string and how to use it.

## Clarification: Neon and PostgreSQL

First, let's clear up the confusion. **Neon is a serverless PostgreSQL provider.** This means that when you use Neon, you are using a real PostgreSQL database, but it's hosted and managed by Neon. So, you are on the right track by using Neon!

The problem is that the `DATABASE_URL` in your `.env` file is not a valid connection string. It seems you have copied a command-line instruction into it. The application needs a specific URL format to connect to the database.

There is **no need to create a new database**. You just need to get the correct connection string from your Neon dashboard.

---

## Phase 1: Get Neon Connection String

**Goal:** Find the correct PostgreSQL connection string from your Neon dashboard.

**Independent Test Criteria:**
*   You should have a connection string that starts with `postgresql://`.

### Tasks

- [ ] T001 [US1] Go to the [Neon website](https://neon.tech) and log in to your account.
- [ ] T002 [US1] In your Neon dashboard, select your project.
- [ ] T003 [US1] On the project's dashboard, find the **Connection Details** section.
- [ ] T004 [US1] Look for a dropdown list of connection strings. Select the **psql** or **General** format. It should give you a URL.
- [ ] T005 [US1] **Copy the entire URL.** It should look something like this:
  ```
  postgresql://<user>:<password>@<host>:<port>/<dbname>
  ```

---

## Phase 2: Update `.env` file

**Goal:** Update the `DATABASE_URL` in your `.env` file with the correct connection string.

**Independent Test Criteria:**
*   The `backend/.env` file should contain the correct and complete Neon database URL.

### Tasks

- [ ] T006 [US2] Open the `.env` file located in the `backend` directory.
- [ ] T007 [US2] Find the line that starts with `NEON_DATABASE_URL=` and **delete it**.
- [ ] T008 [US2] Find the line that starts with `DATABASE_URL=` (or add it if it doesn't exist).
- [ ] T009 [US2] **Paste the full URL you copied from Neon** after `DATABASE_URL=`. Make sure to include the `postgresql+asyncpg://` prefix. Your final URL should look like this:
  ```
  DATABASE_URL="postgresql+asyncpg://<user>:<password>@<host>:<port>/<dbname>"
  ```
  -   **Important:** Replace `postgresql://` from the copied Neon URL with `postgresql+asyncpg://`. The `+asyncpg` part is necessary for our backend's asynchronous database driver.
  -   Make sure there are no extra characters or quotes around the URL.

---

## Phase 3: Test Backend

**Goal:** Confirm that the backend is now working correctly.

**Independent Test Criteria:**
*   The backend server should start and run without errors.
*   The `backend_test.py` script should run successfully and print JSON responses from the API.

### Tasks

- [ ] T010 [US3] Open a terminal in the `backend` directory and run the backend server with the command `uvicorn src.main:app --reload`. The server should now start without any errors. Keep it running.
- [ ] T011 [US3] Open a *new* terminal in the `backend` directory. Run the test script with the command `python backend_test.py`.
- [ ] T012 [US3] Verify that the test script now prints "Status Code: 200" and the JSON responses from the API for both tests.
- [ ] T013 [US3] If the backend is working, the chatbot is now ready to use!
