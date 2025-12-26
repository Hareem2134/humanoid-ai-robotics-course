---
description: "Verification checklist for the Authentication and Personalization feature."
---

# Tasks: Verify Authentication Implementation

**Important**: This is a checklist to be used for verifying the feature *after* the implementation tasks in `specs/008-auth-and-personalization/tasks.md` have been completed and deployed.

## Phase 1: Frontend Verification

- [ ] T001 [US1] Navigate to the `/signup` URL on the deployed frontend and confirm that a signup form is visible.
- [ ] T002 [US2] Navigate to the `/signin` URL on the deployed frontend and confirm that a signin form is visible.
- [ ] T003 [US1] Using a new email address, complete the signup form, including the background questionnaire.
- [ ] T004 [US1] Confirm that after signup, you are either logged in or redirected to the signin page.
- [ ] T005 [US2] Log in with the newly created user account.
- [ ] T006 [US2] Confirm that you can successfully log out of the application.

## Phase 2: Backend Verification

- [ ] T007 [US1] Access the project's database.
- [ ] T008 [US1] Query the `users` table and confirm that a new record exists for the user created during the test.
- [ ] T009 [US1] Inspect the new user's record and verify that the `background_data` column contains the correct JSON data from the questionnaire.

---

## Summary for the User

The reason you don't see the signup/signin forms on the Vercel frontend is that the implementation work for the `008-auth-and-personalization` feature has not been completed yet. The previous step was only to *plan* the feature and create the list of tasks.

Once the tasks in `specs/008-auth-and-personalization/tasks.md` are completed and deployed, you can follow this checklist to confirm that everything is working as expected.
