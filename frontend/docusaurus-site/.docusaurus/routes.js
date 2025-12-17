import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/humanoid-ai-robotics-course/__docusaurus/debug/',
    component: ComponentCreator('/humanoid-ai-robotics-course/__docusaurus/debug/', '7d5'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/__docusaurus/debug/config/',
    component: ComponentCreator('/humanoid-ai-robotics-course/__docusaurus/debug/config/', 'f29'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/__docusaurus/debug/content/',
    component: ComponentCreator('/humanoid-ai-robotics-course/__docusaurus/debug/content/', '594'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/__docusaurus/debug/globalData/',
    component: ComponentCreator('/humanoid-ai-robotics-course/__docusaurus/debug/globalData/', '3ac'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/__docusaurus/debug/metadata/',
    component: ComponentCreator('/humanoid-ai-robotics-course/__docusaurus/debug/metadata/', '7c0'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/__docusaurus/debug/registry/',
    component: ComponentCreator('/humanoid-ai-robotics-course/__docusaurus/debug/registry/', '950'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/__docusaurus/debug/routes/',
    component: ComponentCreator('/humanoid-ai-robotics-course/__docusaurus/debug/routes/', '3ca'),
    exact: true
  },
  {
    path: '/humanoid-ai-robotics-course/docs/',
    component: ComponentCreator('/humanoid-ai-robotics-course/docs/', 'af6'),
    routes: [
      {
        path: '/humanoid-ai-robotics-course/docs/',
        component: ComponentCreator('/humanoid-ai-robotics-course/docs/', '29f'),
        routes: [
          {
            path: '/humanoid-ai-robotics-course/docs/',
            component: ComponentCreator('/humanoid-ai-robotics-course/docs/', '53c'),
            routes: [
              {
                path: '/humanoid-ai-robotics-course/docs/assessments/introduction/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/assessments/introduction/', '208'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/gazebo-and-unity/gazebo/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/gazebo-and-unity/gazebo/', 'd32'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/gazebo-and-unity/introduction-to-simulation/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/gazebo-and-unity/introduction-to-simulation/', '3d8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/gazebo-and-unity/simulating-sensors/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/gazebo-and-unity/simulating-sensors/', 'bb5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/gazebo-and-unity/unity/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/gazebo-and-unity/unity/', '389'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/glossary/glossary/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/glossary/glossary/', 'ee9'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/hardware-requirements/introduction/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/hardware-requirements/introduction/', '8b8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/intro/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/intro/', '43f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/introduction/learning-outcomes/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/introduction/learning-outcomes/', '46f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/introduction/overview/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/introduction/overview/', '57e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/introduction/requirements/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/introduction/requirements/', '198'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/learning-outcomes/introduction/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/learning-outcomes/introduction/', 'f2e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/nvidia-isaac/introduction-to-isaac-sim/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/nvidia-isaac/introduction-to-isaac-sim/', '31f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/nvidia-isaac/nav2/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/nvidia-isaac/nav2/', '1db'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/nvidia-isaac/reinforcement-learning/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/nvidia-isaac/reinforcement-learning/', '8f3'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/nvidia-isaac/visual-slam/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/nvidia-isaac/visual-slam/', 'ed5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/ros-2/introduction-to-ros2/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/ros-2/introduction-to-ros2/', 'b04'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/ros-2/rclpy/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/ros-2/rclpy/', 'b4b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/ros-2/ros2-architecture/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/ros-2/ros2-architecture/', 'bda'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/ros-2/ros2-nodes-topics-services/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/ros-2/ros2-nodes-topics-services/', 'd49'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/ros-2/urdf/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/ros-2/urdf/', '569'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/vla/capstone-project/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/vla/capstone-project/', 'fdf'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/vla/conversational-ai/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/vla/conversational-ai/', 'cd1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/vla/humanoid-kinematics/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/vla/humanoid-kinematics/', 'a45'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/vla/introduction-to-vla/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/vla/introduction-to-vla/', 'be2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/weekly-breakdown/introduction/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/weekly-breakdown/introduction/', '189'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/humanoid-ai-robotics-course/docs/why-physical-ai-matters/introduction/',
                component: ComponentCreator('/humanoid-ai-robotics-course/docs/why-physical-ai-matters/introduction/', 'b94'),
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
