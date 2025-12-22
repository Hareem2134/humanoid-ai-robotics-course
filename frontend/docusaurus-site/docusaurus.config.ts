import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'A comprehensive textbook on Physical AI & Humanoid Robotics',
  favicon: 'img/favicon.ico',
  trailingSlash: false, // Set to false to remove trailing slashes from URLs

  future: {
    v4: true, 
  },

  url: 'https://humanoid-ai-robotics-course.vercel.app', // Your Vercel deployment URL
  baseUrl: '/',

  organizationName: 'haree', 
  projectName: 'humanoid-ai-robotics-course', 

  onBrokenLinks: 'warn', // Changed from 'throw' to 'warn'

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/haree/humanoid-ai-robotics-course/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    './plugins/chatbot-plugin',
    // './plugins/webpack-proxy', // Temporarily disabled to isolate build issues
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'defaultSidebar',
          position: 'left',
          label: 'Textbook',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Textbook',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Modules',
          items: [
            {
              label: 'Module 1: ROS 2',
              to: '/docs/01-ros-2/introduction-to-ros2',
            },
            {
              label: 'Module 2: Digital Twins',
              to: '/docs/02-gazebo-and-unity/introduction-to-simulation',
            },
            {
              label: 'Module 3: NVIDIA Isaac',
              to: '/docs/03-nvidia-isaac/introduction-to-isaac-sim',
            },
            {
              label: 'Module 4: VLA & Humanoid Robotics',
              to: '/docs/04-vla/introduction-to-vla',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Homepage',
              to: '/',
            },
            {
              label: 'Glossary',
              to: '/docs/05-glossary/glossary',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;