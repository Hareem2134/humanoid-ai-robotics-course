---
feature: "Debug Backend with a Test Script"
version: "1.0"
---

## Overview

This document provides instructions on how to use a newly created test script to diagnose the issue with the chatbot's backend. The test script will allow us to test the backend API independently of the frontend, which will help to isolate the problem.

## Implementation Strategy

This is a debugging task. The goal is to run the backend server and the test script, and to analyze the output to find the root cause of the "something went wrong!" error.

---

## Phase 1: Backend Testing

**Goal:** Use the test script to identify the source of the error in the backend.

**Independent Test Criteria:**
*   A successful run of the test script should return a JSON response with the chatbot's answer.
*   A failed run should provide a specific error message that will help to pinpoint the problem.

### Tasks

- [ ] T001 [US1] **Install Dependencies:** Open a terminal in the `backend` directory and run `pip install -r requirements.txt` to ensure all dependencies are installed.
- [ ] T002 [US1] **Run the Backend Server:** In the same terminal, run the backend server with the command `uvicorn src.main:app --reload`. Keep this server running.
- [ ] T003 [US1] **Run the Test Script:** Open a *new* terminal in the `backend` directory. Run the test script with the command `python backend_test.py`.
- [ ] T004 [US1] **Analyze the Output:**
    - If the script runs successfully and you see the chatbot's answers in the output, it means the backend is working correctly, and the problem is likely still in the frontend.
    - If the script fails, it will print an error message. This error message is the key to solving the problem. It might indicate an issue with your OpenAI API key, your Qdrant connection, or some other part of the backend code.
- [ ] T005 [US1] **Report Findings:** Please provide the full output of the test script. This information will be crucial for the next steps in debugging.
