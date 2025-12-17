import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug/',
    component: ComponentCreator('/__docusaurus/debug/', '546'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config/',
    component: ComponentCreator('/__docusaurus/debug/config/', '8a8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content/',
    component: ComponentCreator('/__docusaurus/debug/content/', '2da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData/',
    component: ComponentCreator('/__docusaurus/debug/globalData/', '178'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata/',
    component: ComponentCreator('/__docusaurus/debug/metadata/', 'd6c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry/',
    component: ComponentCreator('/__docusaurus/debug/registry/', '6e3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes/',
    component: ComponentCreator('/__docusaurus/debug/routes/', 'cab'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '268'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'fcf'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', '7e6'),
            routes: [
              {
                path: '/docs/assessments/introduction/',
                component: ComponentCreator('/docs/assessments/introduction/', '269'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/gazebo-and-unity/gazebo/',
                component: ComponentCreator('/docs/gazebo-and-unity/gazebo/', '6be'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/gazebo-and-unity/introduction-to-simulation/',
                component: ComponentCreator('/docs/gazebo-and-unity/introduction-to-simulation/', 'cf1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/gazebo-and-unity/simulating-sensors/',
                component: ComponentCreator('/docs/gazebo-and-unity/simulating-sensors/', '626'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/gazebo-and-unity/unity/',
                component: ComponentCreator('/docs/gazebo-and-unity/unity/', 'ed7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/glossary/glossary/',
                component: ComponentCreator('/docs/glossary/glossary/', '75d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/hardware-requirements/introduction/',
                component: ComponentCreator('/docs/hardware-requirements/introduction/', '58a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/intro/',
                component: ComponentCreator('/docs/intro/', '518'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/introduction/learning-outcomes/',
                component: ComponentCreator('/docs/introduction/learning-outcomes/', 'b64'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/introduction/overview/',
                component: ComponentCreator('/docs/introduction/overview/', '316'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/introduction/requirements/',
                component: ComponentCreator('/docs/introduction/requirements/', '1e8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/learning-outcomes/introduction/',
                component: ComponentCreator('/docs/learning-outcomes/introduction/', 'c44'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/nvidia-isaac/introduction-to-isaac-sim/',
                component: ComponentCreator('/docs/nvidia-isaac/introduction-to-isaac-sim/', '0c0'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/nvidia-isaac/nav2/',
                component: ComponentCreator('/docs/nvidia-isaac/nav2/', '80d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/nvidia-isaac/reinforcement-learning/',
                component: ComponentCreator('/docs/nvidia-isaac/reinforcement-learning/', 'aaf'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/nvidia-isaac/visual-slam/',
                component: ComponentCreator('/docs/nvidia-isaac/visual-slam/', 'ea1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/ros-2/introduction-to-ros2/',
                component: ComponentCreator('/docs/ros-2/introduction-to-ros2/', '347'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/ros-2/rclpy/',
                component: ComponentCreator('/docs/ros-2/rclpy/', '7d9'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/ros-2/ros2-architecture/',
                component: ComponentCreator('/docs/ros-2/ros2-architecture/', 'b3c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/ros-2/ros2-nodes-topics-services/',
                component: ComponentCreator('/docs/ros-2/ros2-nodes-topics-services/', '4dd'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/ros-2/urdf/',
                component: ComponentCreator('/docs/ros-2/urdf/', '648'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/vla/capstone-project/',
                component: ComponentCreator('/docs/vla/capstone-project/', 'c42'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/vla/conversational-ai/',
                component: ComponentCreator('/docs/vla/conversational-ai/', '296'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/vla/humanoid-kinematics/',
                component: ComponentCreator('/docs/vla/humanoid-kinematics/', '0b0'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/vla/introduction-to-vla/',
                component: ComponentCreator('/docs/vla/introduction-to-vla/', '17e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/weekly-breakdown/introduction/',
                component: ComponentCreator('/docs/weekly-breakdown/introduction/', 'd07'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/why-physical-ai-matters/introduction/',
                component: ComponentCreator('/docs/why-physical-ai-matters/introduction/', '58d'),
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
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
