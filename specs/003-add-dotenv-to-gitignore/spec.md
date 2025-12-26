# Spec: Add .env to .gitignore

## User Stories

### US1: Ignore .env files

- **As a** developer
- **I want** to ensure that `.env` files are ignored by Git
- **So that** I do not accidentally commit sensitive information like API keys or database credentials to the repository.

#### Acceptance Criteria

- The `.gitignore` file at the root of the repository is updated to include an entry for `.env`.
- Running `git status` does not show `.env` files as untracked files.
