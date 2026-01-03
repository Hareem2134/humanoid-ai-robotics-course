# Feature: Replace Firebase with FastAPI-based JWT Authentication

This document outlines the tasks required to replace the existing Firebase authentication with a custom FastAPI-based JWT authentication system.

## Phase 1: [US1] Backend Authentication API

**User Story 1**: As a developer, I want to create a secure, token-based authentication API using FastAPI and `fastapi-users` to manage user registration and login.

**Acceptance Criteria**:
- The backend provides endpoints for `/register`, `/login`, and `/logout`.
- Passwords are securely hashed using bcrypt.
- Successful login attempts return a JWT token.
- A `User` table is created in the database to store user information.

### Implementation Tasks

- [X] T001 **Add Dependencies**: Add `fastapi-users[sqlalchemy]`, `passlib[bcrypt]`, `python-jose`, and `pydantic-settings` to `backend/requirements.txt`.
- [X] T002 **Configure Auth Backend**: Create `backend/src/core/auth.py` to configure the JWT strategy and bearer token transport for `fastapi-users`.
- [X] T003 **Define User Model**: Create `backend/src/core/models/user.py` with a `User` model that inherits from `SQLAlchemyBaseUserTable`.
- [X] T004 **Define User Schemas**: Create `backend/src/core/schemas.py` with `UserRead`, `UserCreate`, and `UserUpdate` schemas for `fastapi-users`.
- [X] T005 **Configure FastAPI Users**: Create `backend/src/core/users.py` to set up the `FastAPIUsers` instance with the database adapter and authentication backend.
- [X] T006 **Update Database Script**: Modify `backend/src/core/database.py` to ensure the `User` table is created on startup.
- [X] T007 **Integrate Routers**: Update `backend/src/main.py` to include the authentication and registration routers from `fastapi_users`.

## Phase 2: [US2] Frontend Integration

**User Story 2**: As a developer, I want to connect the React frontend to the new FastAPI authentication API to provide a seamless login and registration experience.

**Acceptance Criteria**:
- Users can register for a new account using a signup form.
- Users can log in with their credentials to receive a JWT.
- The user's authentication state is managed globally using a React Context.
- The JWT is stored securely on the client (e.g., `localStorage`).

### Implementation Tasks

- [X] T008 **Create Auth Context**: Create a new `frontend/docusaurus-site/src/contexts/useAuth.js` to manage the user's authentication state, JWT, and provide `login`, `signup`, and `logout` functions.
- [X] T009 **Create Login Page**: Create `frontend/docusaurus-site/src/pages/LoginPage.js` with a form that uses the `useAuth` context to log in the user.
- [X] T010 **Create Signup Page**: Create `frontend/docusaurus-site/src/pages/SignupPage.js` with a form for user registration.
- [X] T011 **Update Root Component**: Modify `frontend/docusaurus-site/src/theme/Root.js` to wrap the application with the new `AuthProvider`.

## Phase 3: [US3] Firebase Cleanup

**User Story 3**: As a developer, I want to remove all traces of the old Firebase authentication system to reduce code complexity and eliminate unused dependencies.

**Acceptance Criteria**:
- All Firebase-related files are deleted from the codebase.
- The `firebase` dependency is removed from `package.json`.

### Implementation Tasks

- [X] T012 **Delete Firebase Utils**: Delete the `frontend/docusaurus-site/src/utils/firebase.js` file.
- [X] T013 **Delete Old Signup Page**: Delete the old `frontend/docusaurus-site/src/pages/signup.js` file.
- [X] T014 **Remove Dependency**: Remove the `firebase` package from the `dependencies` in `frontend/docusaurus-site/package.json`.

## Dependencies

- **[US2]** depends on **[US1]**.
- **[US3]** can be done in parallel with **[US1]** and **[US2]**.
