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
    component: ComponentCreator('/humanoid-ai-robotics-course/docs', '4d7'),
    routes: [
      {
        path: '/humanoid-ai-robotics-course/docs',
        component: ComponentCreator('/humanoid-ai-robotics-course/docs', 'fda'),
        routes: [
          {
            path: '/humanoid-ai-robotics-course/docs',
            component: ComponentCreator('/humanoid-ai-robotics-course/docs', 'e28'),
            routes: [
              {
                path: '/humanoid-ai-robotics-course/docs/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/', '06f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/assessments/introduction',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/assessments/introduction', '05e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/gazebo-and-unity/gazebo',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/gazebo-and-unity/gazebo', '0ab'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/gazebo-and-unity/introduction-to-simulation',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/gazebo-and-unity/introduction-to-simulation', 'c7f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/gazebo-and-unity/simulating-sensors',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/gazebo-and-unity/simulating-sensors', '0c8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/gazebo-and-unity/unity',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/gazebo-and-unity/unity', 'e58'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/glossary/glossary',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/glossary/glossary', '507'),
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
                path: '/humanoid-ai-robotics-course/docs/introduction/learning-outcomes',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/introduction/learning-outcomes', 'd26'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/introduction/overview',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/introduction/overview', '85a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/introduction/requirements',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/introduction/requirements', 'ae9'),
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
                path: '/humanoid-ai-robotics-course/docs/nvidia-isaac/introduction-to-isaac-sim',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/nvidia-isaac/introduction-to-isaac-sim', 'cd6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/nvidia-isaac/nav2',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/nvidia-isaac/nav2', '9f2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/nvidia-isaac/reinforcement-learning',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/nvidia-isaac/reinforcement-learning', '218'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/nvidia-isaac/visual-slam',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/nvidia-isaac/visual-slam', '15e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/ros-2/introduction-to-ros2',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/ros-2/introduction-to-ros2', '13b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/ros-2/rclpy',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/ros-2/rclpy', 'bdc'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/ros-2/ros2-architecture',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/ros-2/ros2-architecture', '2b1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/ros-2/ros2-nodes-topics-services',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/ros-2/ros2-nodes-topics-services', '5b7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/ros-2/urdf',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/ros-2/urdf', 'b86'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/vla/capstone-project',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/vla/capstone-project', 'bf7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/vla/conversational-ai',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/vla/conversational-ai', '8b5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/vla/humanoid-kinematics',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/vla/humanoid-kinematics', 'eee'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/vla/introduction-to-vla',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/vla/introduction-to-vla', 'c0b'),
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
    path: '/humanoid-ai-robotics-course/',
    component: ComponentCreator('/humanoid-ai-robotics-course/', 'da7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
