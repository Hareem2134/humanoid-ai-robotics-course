# Spec: Untrack .env file

## User Stories

### US1: Untrack .env files from Git

- **As a** developer
- **I want** to ensure that any `.env` files currently tracked by Git are untracked
- **So that** they are no longer included in future commits, preventing sensitive information from being pushed to the remote repository.

#### Acceptance Criteria

- The `.env` file (if present and tracked) is removed from the Git staging area and index.
- Running `git status` shows `.env` as an untracked file (if it exists and is ignored by `.gitignore`).
- No changes to `.env` files are pushed in subsequent commits.
