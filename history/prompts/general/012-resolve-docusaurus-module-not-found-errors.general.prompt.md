---
id: 012
title: Resolve Docusaurus "Module not found" errors
stage: general
date: 2025-12-12
surface: agent
model: Gemini
feature: none
branch: master
user: user
command: new errors: Compiled with problems: × ERROR in ./node_modules/@docusaurus/core/lib/client/App.js 6:28-62 Module not found: Error: Can't resolve '@generated/client-modules' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\client' ...
labels: ["docusaurus", "error", "module-not-found", "dependencies"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - frontend/docusaurus-site/node_modules
 - frontend/docusaurus-site/package-lock.json
tests:
null
---

## Prompt

new errors: Compiled with problems:
×
ERROR in ./node_modules/@docusaurus/core/lib/client/App.js 6:28-62
Module not found: Error: Can't resolve '@generated/client-modules' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\client'
ERROR in ./node_modules/@docusaurus/core/lib/client/App.js 6:62-100
Module not found: Error: Can't resolve '@generated/routes' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\client'
...

## Response snapshot

I have successfully reinstalled all the dependencies. This should have resolved the "Module not found" errors.

Now, I will ask the user to restart their development server and check if the site loads correctly. If it does, the problem is resolved.

## Outcome

- ✅ Impact: Attempted to resolve the "Module not found" errors by reinstalling all dependencies.
- 🧪 Tests: No automated tests were run.
- 📁 Files: The `node_modules` directory and `package-lock.json` file were deleted and recreated.
- 🔁 Next prompts: Awaiting user confirmation after restarting the development server.
- 🧠 Reflection: Reinstalling dependencies is a common and effective solution for "Module not found" errors, as it can resolve issues with corrupted or incomplete installations.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): If the errors persist, it would indicate a more fundamental issue with the Docusaurus configuration or a version incompatibility that is not resolved by a simple reinstallation.
