
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './Homepage.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className={styles.hero__title}>{siteConfig.title}</h1>
        <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Learning →
          </Link>
        </div>
      </div>
    </header>
  );
}

const modules = [
  {
    title: 'Module 1: The Robotic Nervous System (ROS 2)',
    description: 'Master ROS 2 architecture, communication patterns, and robot modeling. Learn to build distributed robotic systems using nodes, topics, services, and actions.',
    link: '/docs/ros-2/introduction-to-ros2',
    weeks: 'Weeks 3-5',
    icon: '/img/icons/module1.svg',
    sections: [
      {title: 'Introduction to ROS 2', link: '/docs/ros-2/introduction-to-ros2'},
      {title: 'ROS 2 Architecture', link: '/docs/ros-2/ros2-architecture#key-concepts'},
      {title: 'Nodes, Topics, and Services', link: '/docs/ros-2/ros2-nodes-topics-services#creating-a-ros-2-node'},
      {title: 'Rclpy', link: '/docs/ros-2/rclpy#key-rclpy-concepts'},
      {title: 'URDF', link: '/docs/ros-2/urdf#key-urdf-elements'},
    ]
  },
  {
    title: 'Module 2: Digital Twins - Simulation & Sensors',
    description: 'Build digital twins for robotic systems using Gazebo and Unity. Simulate sensors, physics, and environments for testing before deploying to physical hardware.',
    link: '/docs/gazebo-and-unity/introduction-to-simulation',
    weeks: 'Weeks 6-7',
    icon: '/img/icons/module2.svg',
    sections: [
      {title: 'Introduction to Simulation', link: '/docs/gazebo-and-unity/introduction-to-simulation#why-is-simulation-important-in-robotics'},
      {title: 'Gazebo', link: '/docs/gazebo-and-unity/gazebo#key-features-of-gazebo'},
      {title: 'Unity', link: '/docs/gazebo-and-unity/unity#advantages-of-unity-for-robotics-simulation'},
      {title: 'Simulating Sensors', link: '/docs/gazebo-and-unity/simulating-sensors#simulating-a-lidar'},
    ]
  },
  {
    title: 'Module 3: NVIDIA Isaac - Perception & Navigation',
    description: 'Leverage NVIDIA Isaac Sim for GPU-accelerated robotics. Implement VSLAM, Nav2 navigation stacks, and reinforcement learning for autonomous behaviors.',
    link: '/docs/nvidia-isaac/introduction-to-isaac-sim',
    weeks: 'Weeks 8-10',
    icon: '/img/icons/module3.svg',
    sections: [
      {title: 'Introduction to Isaac Sim', link: '/docs/nvidia-isaac/introduction-to-isaac-sim#key-features-of-nvidia-isaac-sim'},
      {title: 'Visual SLAM', link: '/docs/nvidia-isaac/visual-slam#types-of-vslam'},
      {title: 'Nav2', link: '/docs/nvidia-isaac/nav2#key-components-of-nav2'},
      {title: 'Reinforcement Learning', link: '/docs/nvidia-isaac/reinforcement-learning#key-concepts-in-reinforcement-learning'},
    ]
  },
  {
    title: 'Module 4: VLA & Humanoid Robotics',
    description: 'Integrate Vision-Language-Action models with humanoid robots. Master humanoid kinematics, manipulation, and conversational AI for natural human-robot interaction.',
    link: '/docs/vla/introduction-to-vla',
    weeks: 'Weeks 11-13',
    icon: '/img/icons/module4.svg',
    sections: [
      {title: 'Introduction to VLA', link: '/docs/vla/introduction-to-vla#the-vla-triad-vision-language-and-action'},
      {title: 'Humanoid Kinematics', link: '/docs/vla/humanoid-kinematics#forward-kinematics'},
      {title: 'Conversational AI', link: '/docs/vla/conversational-ai#speech-to-text'},
      {title: 'Capstone Project', link: '/docs/vla/capstone-project#project-goal'},
    ]
  },
];

function HomepageModules() {
  return (
    <section className={styles.modules}>
      <div className="container">
        <div className="row">
          {modules.map((module, idx) => (
            <div key={idx} className="col col--6">
              <div className={styles.module}>
                <img src={useBaseUrl(module.icon)} alt={`${module.title} icon`} className={styles.moduleIcon} />
                <h3>{module.weeks}</h3>
                <h2><Link to={module.link}>{module.title}</Link></h2>
                <p>{module.description}</p>
                <ul className={styles.moduleSections}>
                  {module.sections.map((section, sectionIdx) => (
                    <li key={sectionIdx}><Link to={section.link}>{section.title}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageQuickLinks() {
  const links = [
    {
      title: 'Course Modules',
      link: '#modules',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Glossary',
      link: '/docs/glossary/glossary#a',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Learning Outcomes',
      link: '/docs/learning-outcomes/introduction',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Weekly Breakdown',
      link: '/docs/weekly-breakdown/introduction',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Assessments',
      link: '/docs/assessments/introduction',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Hardware',
      link: '/docs/hardware-requirements/introduction#1-the-digital-twin-workstation-required-per-student',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <h2 className={styles.quickLinks__title}>Quick Links</h2>
        <div className="row">
          {links.map((link, idx) => (
            <div key={idx} className="col col--4">
              <Link to={link.link} className={styles.quickLinkCard}>
                <div className={styles.quickLinkIcon}>{link.icon}</div>
                <h3 className={styles.quickLinkTitle}>{link.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div id="modules" />
        <HomepageModules />
        <HomepageQuickLinks />
      </main>
    </Layout>
  );
}
