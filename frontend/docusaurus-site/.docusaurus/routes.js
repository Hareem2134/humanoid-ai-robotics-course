import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/humanoid-ai-robotics-course/blog',
    component: ComponentCreator('/humanoid-ai-robotics-course/blog', 'bb4'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/blog/archive',
    component: ComponentCreator('/humanoid-ai-robotics-course/blog/archive', 'e13'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/blog/authors',
    component: ComponentCreator('/humanoid-ai-robotics-course/blog/authors', '478'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/humanoid-ai-robotics-course/blog/authors/all-sebastien-lorber-articles', 'ae1'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/blog/authors/yangshun',
    component: ComponentCreator('/humanoid-ai-robotics-course/blog/authors/yangshun', '5ed'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/blog/first-blog-post',
    component: ComponentCreator('/humanoid-ai-robotics-course/blog/first-blog-post', '98e'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/blog/long-blog-post',
    component: ComponentCreator('/humanoid-ai-robotics-course/blog/long-blog-post', 'e08'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/blog/mdx-blog-post',
    component: ComponentCreator('/humanoid-ai-robotics-course/blog/mdx-blog-post', 'ffe'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/blog/tags',
    component: ComponentCreator('/humanoid-ai-robotics-course/blog/tags', 'ded'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/blog/tags/docusaurus',
    component: ComponentCreator('/humanoid-ai-robotics-course/blog/tags/docusaurus', 'd5b'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/blog/tags/facebook',
    component: ComponentCreator('/humanoid-ai-robotics-course/blog/tags/facebook', '31e'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/blog/tags/hello',
    component: ComponentCreator('/humanoid-ai-robotics-course/blog/tags/hello', '36f'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/blog/tags/hola',
    component: ComponentCreator('/humanoid-ai-robotics-course/blog/tags/hola', '284'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/blog/welcome',
    component: ComponentCreator('/humanoid-ai-robotics-course/blog/welcome', '2bf'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/markdown-page',
    component: ComponentCreator('/humanoid-ai-robotics-course/markdown-page', 'b35'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/docs',
    component: ComponentCreator('/humanoid-ai-robotics-course/docs', '009'),
    routes: [
      {
        path: '/humanoid-ai-robotics-course/docs',
        component: ComponentCreator('/humanoid-ai-robotics-course/docs', '70c'),
        routes: [
          {
            path: '/humanoid-ai-robotics-course/docs',
            component: ComponentCreator('/humanoid-ai-robotics-course/docs', 'aa3'),
            routes: [
              {
                path: '/humanoid-ai-robotics-course/docs/assessments/introduction',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/assessments/introduction', 'd7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/category/tutorial---basics',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/category/tutorial---basics', '36d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/category/tutorial---extras',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/category/tutorial---extras', 'b04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/gazebo-and-unity/introduction',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/gazebo-and-unity/introduction', 'b96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/hardware-requirements/introduction',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/hardware-requirements/introduction', '795'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/intro',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/intro', '7eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/learning-outcomes/introduction',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/learning-outcomes/introduction', 'ab4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/nvidia-isaac/introduction',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/nvidia-isaac/introduction', 'f8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/ros-2/introduction',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/ros-2/introduction', '5c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/tutorial-basics/congratulations', '277'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/tutorial-basics/create-a-blog-post', 'c46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/tutorial-basics/create-a-document', '5d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/tutorial-basics/create-a-page', '49b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/tutorial-basics/deploy-your-site', '3b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/tutorial-basics/markdown-features', '6c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/tutorial-extras/manage-docs-versions', '36d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/tutorial-extras/translate-your-site', '73e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/vla/introduction',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/vla/introduction', 'dd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/weekly-breakdown/introduction',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/weekly-breakdown/introduction', '6f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/why-physical-ai-matters/introduction',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/why-physical-ai-matters/introduction', 'e19'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/humanoid-ai-robotics-course/',
    component: ComponentCreator('/humanoid-ai-robotics-course/', '175'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
