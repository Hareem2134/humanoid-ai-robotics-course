import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/humanoid-ai-robotics-course/__docusaurus/debug',
    component: ComponentCreator('/humanoid-ai-robotics-course/__docusaurus/debug', '6c1'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/__docusaurus/debug/config',
    component: ComponentCreator('/humanoid-ai-robotics-course/__docusaurus/debug/config', 'b9f'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/__docusaurus/debug/content',
    component: ComponentCreator('/humanoid-ai-robotics-course/__docusaurus/debug/content', '8ce'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/__docusaurus/debug/globalData',
    component: ComponentCreator('/humanoid-ai-robotics-course/__docusaurus/debug/globalData', '838'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/__docusaurus/debug/metadata',
    component: ComponentCreator('/humanoid-ai-robotics-course/__docusaurus/debug/metadata', 'e63'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/__docusaurus/debug/registry',
    component: ComponentCreator('/humanoid-ai-robotics-course/__docusaurus/debug/registry', 'f11'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/__docusaurus/debug/routes',
    component: ComponentCreator('/humanoid-ai-robotics-course/__docusaurus/debug/routes', '9fb'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/docs',
    component: ComponentCreator('/humanoid-ai-robotics-course/docs', '468'),
    routes: [
      {
        path: '/humanoid-ai-robotics-course/docs',
        component: ComponentCreator('/humanoid-ai-robotics-course/docs', 'dbd'),
        routes: [
          {
            path: '/humanoid-ai-robotics-course/docs',
            component: ComponentCreator('/humanoid-ai-robotics-course/docs', '3f4'),
            routes: [
              {
                path: '/humanoid-ai-robotics-course/docs/assessments/introduction',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/assessments/introduction', '05e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/gazebo-and-unity/introduction',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/gazebo-and-unity/introduction', 'e46'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/hardware-requirements/introduction',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/hardware-requirements/introduction', '661'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/learning-outcomes/introduction',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/learning-outcomes/introduction', 'dcf'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/nvidia-isaac/introduction',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/nvidia-isaac/introduction', 'be6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/ros-2/introduction',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/ros-2/introduction', '311'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/vla/introduction',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/vla/introduction', 'c11'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/weekly-breakdown/introduction',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/weekly-breakdown/introduction', '41f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/why-physical-ai-matters/introduction',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/why-physical-ai-matters/introduction', 'f39'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
