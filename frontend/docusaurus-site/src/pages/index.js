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
            to="docs/intro">
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
    link: '/docs/01-ros-2/01-introduction-to-ros2',
    weeks: 'Weeks 3-5',
    icon: '/img/icons/module1.svg',
    sections: [
      {title: 'Introduction to ROS 2', link: '/docs/01-ros-2/01-introduction-to-ros2'},
      {title: 'ROS 2 Architecture', link: '/docs/01-ros-2/02-ros2-architecture'},
      {title: 'Nodes, Topics, and Services', link: '/docs/01-ros-2/03-ros2-nodes-topics-services'},
      {title: 'Rclpy', link: '/docs/01-ros-2/04-rclpy'},
      {title: 'URDF', link: '/docs/01-ros-2/05-urdf'},
    ]
  },
  {
    title: 'Module 2: Digital Twins - Simulation & Sensors',
    description: 'Build digital twins for robotic systems using Gazebo and Unity. Simulate sensors, physics, and environments for testing before deploying to physical hardware.',
    link: '/docs/02-gazebo-and-unity/01-introduction-to-simulation',
    weeks: 'Weeks 6-7',
    icon: '/img/icons/module2.svg',
    sections: [
      {title: 'Introduction to Simulation', link: '/docs/02-gazebo-and-unity/01-introduction-to-simulation'},
      {title: 'Gazebo', link: '/docs/02-gazebo-and-unity/02-gazebo'},
      {title: 'Unity', link: '/docs/02-gazebo-and-unity/03-unity'},
      {title: 'Simulating Sensors', link: '/docs/02-gazebo-and-unity/04-simulating-sensors'},
    ]
  },
  {
    title: 'Module 3: NVIDIA Isaac - Perception & Navigation',
    description: 'Leverage NVIDIA Isaac Sim for GPU-accelerated robotics. Implement VSLAM, Nav2 navigation stacks, and reinforcement learning for autonomous behaviors.',
    link: '/docs/03-nvidia-isaac/01-introduction-to-isaac-sim',
    weeks: 'Weeks 8-10',
    icon: '/img/icons/module3.svg',
    sections: [
      {title: 'Introduction to Isaac Sim', link: '/docs/03-nvidia-isaac/01-introduction-to-isaac-sim'},
      {title: 'Visual SLAM', link: '/docs/03-nvidia-isaac/02-visual-slam'},
      {title: 'Nav2', link: '/docs/03-nvidia-isaac/03-nav2'},
      {title: 'Reinforcement Learning', link: '/docs/03-nvidia-isaac/04-reinforcement-learning'},
    ]
  },
  {
    title: 'Module 4: VLA & Humanoid Robotics',
    description: 'Integrate Vision-Language-Action models with humanoid robots. Master humanoid kinematics, manipulation, and conversational AI for natural human-robot interaction.',
    link: '/docs/04-vla/01-introduction-to-vla',
    weeks: 'Weeks 11-13',
    icon: '/img/icons/module4.svg',
    sections: [
      {title: 'Introduction to VLA', link: '/docs/04-vla/01-introduction-to-vla'},
      {title: 'Humanoid Kinematics', link: '/docs/04-vla/02-humanoid-kinematics'},
      {title: 'Conversational AI', link: '/docs/04-vla/03-conversational-ai'},
      {title: 'Capstone Project', link: '/docs/04-vla/04-capstone-project'},
    ]
  },
];

function HomepageModules() {
  return (
    <section className={styles.modules} id="modules">
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
      link: '/docs/05-glossary/01-glossary',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20v-2H6.5A2.5 2.5 0 014 12.5v-5A2.5 2.5 0 016.5 5H20V3H6.5A2.5 2.5 0 014 .5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Learning Outcomes',
      link: '/docs/06-learning-outcomes/01-introduction',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Weekly Breakdown',
      link: '/docs/07-weekly-breakdown/01-introduction',
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
      link: '/docs/08-assessments/01-introduction',
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
      link: '/docs/09-hardware-requirements/01-introduction',
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
        <HomepageModules />
        <HomepageQuickLinks />
      </main>
    </Layout>
  );
}