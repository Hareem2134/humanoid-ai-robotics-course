---
id: 017
title: Disable Docusaurus debug plugin to resolve build errors
stage: general
date: 2025-12-12
surface: agent
model: Gemini
feature: none
branch: master
user: user
command: "resolve these errors : Compiled with problems: × ERROR in ./.docusaurus/registry.js 1:13775-13928 Module not found: Error: Can't resolve '@generated/docusaurus-plugin-debug/default/__plugin.json' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\.docusaurus'"
labels: ["docusaurus", "error", "debug-plugin", "build"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - frontend/docusaurus-site/docusaurus.config.ts
tests:
  null
---

## Prompt

resolve these errors : Compiled with problems:
×
ERROR in ./.docusaurus/registry.js 1:13775-13928
Module not found: Error: Can't resolve '@generated/docusaurus-plugin-debug/default/__plugin.json' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\.docusaurus'
ERROR in ./.docusaurus/registry.js 1:13988-14067
Module not found: Error: Can't resolve '@generated/docusaurus-plugin-debug/default/__plugin.json' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\.docusaurus'

## Response snapshot

I have disabled the debug plugin in `docusaurus.config.ts`. This should prevent the errors related to the debug plugin.

Now, I will ask the user to restart their development server and check if the site loads correctly. If it does, the problem is with the debug plugin, and we can investigate that further if needed. For now, the goal is to get the site running.

## Outcome

- ✅ Impact: Attempted to resolve the Docusaurus build errors by disabling the debug plugin.
- 🧪 Tests: No automated tests were run.
- 📁 Files: `frontend/docusaurus-site/docusaurus.config.ts` was modified.
- 🔁 Next prompts: Awaiting user confirmation after restarting the development server.
- 🧠 Reflection: When a core plugin is causing build issues, disabling it can be a useful debugging step to isolate the problem.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): If this resolves the issue, we can try to re-enable the debug plugin and investigate why it's failing. If it doesn't, we will need to explore other potential causes for the build failure.
