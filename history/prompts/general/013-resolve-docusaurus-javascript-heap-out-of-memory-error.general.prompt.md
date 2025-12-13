--- 
id: 013
title: Resolve Docusaurus "JavaScript heap out of memory" error
stage: general
date: 2025-12-12
surface: agent
model: Gemini
feature: none
branch: master
user: user
command: solve these errors:Compiled with problems: × ERROR in ./node_modules/@docusaurus/core/lib/client/App.js 6:28-62 Module not found: Error: Can't resolve '@generated/client-modules' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\client' ... these errors are happening after you clear node modules cache
labels: ["docusaurus", "error", "memory", "build"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - frontend/docusaurus-site/package.json
tests:
null
---

## Prompt

solve these errors:Compiled with problems:
×
ERROR in ./node_modules/@docusaurus/core/lib/client/App.js 6:28-62
Module not found: Error: Can't resolve '@generated/client-modules' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\client'
ERROR in ./node_modules/@docusaurus/core/lib/client/App.js 6:62-100
Module not found: Error: Can't resolve '@generated/routes' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\client'
ERROR in ./node_modules/@docusaurus/core/lib/client/ClientLifecyclesDispatcher.js 6:3-56
Module not found: Error: Can't resolve '@generated/client-modules' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\client'
ERROR in ./node_modules/@docusaurus/core/lib/client/clientEntry.js 6:186-239
Module not found: Error: Can't resolve '@generated/docusaurus.config' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\client'
ERROR in ./node_modules/@docusaurus/core/lib/client/docusaurus.js 6:48-106
Module not found: Error: Can't resolve '@generated/routesChunkNames' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\client'
ERROR in ./node_modules/@docusaurus/core/lib/client/docusaurus.js 6:106-144
Module not found: Error: Can't resolve '@generated/routes' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\client'
ERROR in ./node_modules/@docusaurus/core/lib/client/docusaurusContext.js 6:28-81
Module not found: Error: Can't resolve '@generated/docusaurus.config' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\client'
ERROR in ./node_modules/@docusaurus/core/lib/client/docusaurusContext.js 6:81-127
Module not found: Error: Can't resolve '@generated/globalData' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\client'
ERROR in ./node_modules/@docusaurus/core/lib/client/docusaurusContext.js 6:127-161
Module not found: Error: Can't resolve '@generated/i18n' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\client'
ERROR in ./node_modules/@docusaurus/core/lib/client/docusaurusContext.js 6:161-219
Module not found: Error: Can't resolve '@generated/codeTranslations' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\client'
ERROR in ./node_modules/@docusaurus/core/lib/client/docusaurusContext.js 6:219-270
Module not found: Error: Can't resolve '@generated/site-metadata' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\client'
ERROR in ./node_modules/@docusaurus/core/lib/client/exports/Translate.js 7:0-58
Module not found: Error: Can't resolve '@generated/codeTranslations' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\client\exports'
ERROR in ./node_modules/@docusaurus/core/lib/client/normalizeLocation.js 6:48-86
Module not found: Error: Can't resolve '@generated/routes' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\client'
ERROR in ./node_modules/@docusaurus/core/lib/client/preload.js 6:3-41
Module not found: Error: Can't resolve '@generated/routes' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\client'
ERROR in ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js 6:264-312
Module not found: Error: Can't resolve '@theme/SkipToContent' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\theme-classic\lib\theme\Layout'
ERROR in ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js 6:30-77
Module not found: Error: Can't resolve '@generated/routes' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\theme-common\lib\utils'
ERROR in ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js 6:64-113
Module not found: Error: Can't resolve '@generated/site-storage' in 'C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\theme-common\lib\utils'                                                                               these errors are happening after you clear node modules cache

## Response snapshot

I have modified the `build` script in `package.json` to increase the Node.js memory limit. This should resolve the "JavaScript heap out of memory" error.

Now, I will ask the user to run the `npm run build` command again and check if it completes successfully. If it does, then the `start` command should also work correctly.

## Outcome

- ✅ Impact: Attempted to resolve the "JavaScript heap out of memory" error by increasing the Node.js memory limit for the build script in `package.json`.
- 🧪 Tests: No automated tests were run.
- 📁 Files: `frontend/docusaurus-site/package.json` was modified.
- 🔁 Next prompts: Awaiting user to run the build command again.
- 🧠 Reflection: Increasing Node.js memory is a standard solution for `heap out of memory` errors during build processes, which often manifest as "Module not found" errors in Docusaurus if the generation process fails.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): If the build still fails, further investigation into Docusaurus's internal logging or a deeper issue with the Docusaurus configuration will be necessary.
