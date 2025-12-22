
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  defaultSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/overview',
        'introduction/learning-outcomes',
        'introduction/requirements',
      ],
    },
    {
      type: 'category',
      label: 'ROS 2',
      items: [
        'ros-2/introduction-to-ros2',
        'ros-2/ros2-architecture',
        'ros-2/ros2-nodes-topics-services',
        'ros-2/rclpy',
        'ros-2/urdf',
      ],
    },
    {
      type: 'category',
      label: 'Gazebo and Unity',
      items: [
        'gazebo-and-unity/introduction-to-simulation',
        'gazebo-and-unity/gazebo',
        'gazebo-and-unity/unity',
        'gazebo-and-unity/simulating-sensors',
      ],
    },
    {
      type: 'category',
      label: 'NVIDIA Isaac',
      items: [
        'nvidia-isaac/introduction-to-isaac-sim',
        'nvidia-isaac/visual-slam',
        'nvidia-isaac/nav2',
        'nvidia-isaac/reinforcement-learning',
      ],
    },
    {
      type: 'category',
      label: 'VLA',
      items: [
        'vla/introduction-to-vla',
        'vla/humanoid-kinematics',
        'vla/conversational-ai',
        'vla/capstone-project',
      ],
    },
    {
      type: 'category',
      label: 'Glossary',
      items: ['glossary/glossary'],
    },
    {
      type: 'category',
      label: 'Why Physical AI Matters',
      items: ['why-physical-ai-matters/introduction'],
    },
    {
      type: 'category',
      label: 'Learning Outcomes',
      items: ['learning-outcomes/introduction'],
    },
    {
      type: 'category',
      label: 'Weekly Breakdown',
      items: ['weekly-breakdown/introduction'],
    },
    {
      type: 'category',
      label: 'Assessments',
      items: ['assessments/introduction'],
    },
    {
      type: 'category',
      label: 'Hardware Requirements',
      items: ['hardware-requirements/introduction'],
    },
  ],
};

module.exports = sidebars;
