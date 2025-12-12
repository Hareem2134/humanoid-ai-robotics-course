---
id: 009
title: Resolve Docusaurus blog author error
stage: general
date: 2025-12-12
surface: agent
model: Gemini
feature: none
branch: master
user: user
command: cmd error, check and resolve: [ERROR] Error: Processing of blog source file path=2025-12-12-hello-blog.md failed. ... [cause]: Error: Can't reference blog post authors by a key (such as 'gemini') because no authors map file could be loaded.
labels: ["docusaurus", "error", "blog", "authors"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - frontend/docusaurus-site/blog/2025-12-12-hello-blog.md
tests:
null
---

## Prompt

cmd error, check and resolve: [ERROR] Error: Processing of blog source file path=2025-12-12-hello-blog.md failed.
    at doProcessBlogSourceFile (C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\plugin-content-blog\lib\blogUtils.js:271:19)
    at async Promise.all (index 0)
    at async generateBlogPosts (C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\plugin-content-blog\lib\blogUtils.js:274:24)
    at async Object.loadContent (C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\plugin-content-blog\lib\index.js:155:29)
    at async C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\server\plugins\plugins.js:40:23
    at async Promise.all (index 2)
    at async C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\server\plugins\plugins.js:146:25
    at async loadSite (C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\server\site.js:155:45)
    at async createReloadableSite (C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\commands\start\utils.js:62:16)
    at async doStart (C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\core\lib\commands\start\start.js:22:28) {
  [cause]: Error: Can't reference blog post authors by a key (such as 'gemini') because no authors map file could be loaded.
  Please double-check your blog plugin config (in particular 'authorsMapPath'), ensure the file exists at the configured path, is not empty, and is valid!
      at getAuthorsMapAuthor (C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\plugin-content-blog\lib\authors.js:82:23)
      at toAuthor (C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\plugin-content-blog\lib\authors.js:100:16)
      at Array.map (<anonymous>)
      at getFrontMatterAuthors (C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\plugin-content-blog\lib\authors.js:58:42)
      at getBlogPostAuthors (C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\plugin-content-blog\lib\authors.js:114:21)
      at processBlogSourceFile (C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\plugin-content-blog\lib\blogUtils.js:215:54)
      at async doProcessBlogSourceFile (C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\plugin-content-blog\lib\blogUtils.js:268:20)
      at async Promise.all (index 0)
      at async generateBlogPosts (C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\plugin-content-blog\lib\blogUtils.js:274:24)
      at async Object.loadContent (C:\Users\haree\Downloads\humanoid-ai-robotics-course\frontend\docusaurus-site\node_modules\@docusaurus\plugin-content-blog\lib\index.js:155:29)
}
[INFO] Docusaurus version: 3.9.2
Node version: v24.11.1

## Response snapshot

I have removed the `authors` field from the blog post frontmatter. This should resolve the error about the missing authors map file.

Now, I will ask the user to restart their development server and check if the site loads correctly. If it does, the problem is resolved.

## Outcome

- ✅ Impact: Removed the `authors` field from a sample blog post to resolve a build error related to a missing authors map file.
- 🧪 Tests: No automated tests were run.
- 📁 Files: `frontend/docusaurus-site/blog/2025-12-12-hello-blog.md` was modified.
- 🔁 Next prompts: Awaiting user confirmation after restarting the development server.
- 🧠 Reflection: The error message clearly pointed to the issue with author referencing. Removing the field was the quickest way to resolve the build error for a placeholder post.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): If the user wants author functionality, I will need to create and populate an `authors.yml` file.
