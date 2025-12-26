# Implementation Plan: Remove Bonus Points Section

## Feature: Remove Bonus Points Section

This document outlines the technical plan for removing the bonus points section from the course book.

## 1. Tech Stack

- **Framework**: Docusaurus
- **Language**: JavaScript (for sidebar configuration)

## 2. Project Structure & Key Files

- **Content File to Delete**: `frontend/docusaurus-site/docs/08-assessments/bonus-points.md`
- **Sidebar Configuration to Modify**: `frontend/docusaurus-site/sidebars.js`

## 3. Implementation Strategy

1.  **Delete File**: Remove the `bonus-points.md` file from the `frontend/docusaurus-site/docs/08-assessments/` directory.
2.  **Update Sidebar**: Edit `frontend/docusaurus-site/sidebars.js` and remove the entry that links to the `bonus-points.md` file.
3.  **Verify**: Run the Docusaurus development server locally to confirm that the "Bonus Points" page is gone and the sidebar link has been removed.

## 4. MVP Scope

The MVP is to have the bonus points page and its corresponding sidebar link completely removed from the site.
