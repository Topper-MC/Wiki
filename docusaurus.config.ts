import { themes as githubThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkGithubAdmonitionsToDirectives from 'remark-github-admonitions-to-directives';

const config: Config = {
  title: 'Topper',
  tagline: 'A simple, flexible, and powerful leaderboard plugin for Minecraft servers',
  favicon: 'https://topper-mc.github.io/Assets/topper/logo.svg',

  // Set the production url of your site here
  url: 'https://topper-mc.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/Wiki/',

  // GitHub pages deployment config.
  organizationName: 'Topper-MC', // Usually your GitHub org/user name.
  projectName: 'Wiki', // Usually your repo name.

  future: {
    faster: true,
    v4: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Serve the docs directly from base URL
          editUrl: 'https://github.com/Topper-MC/Wiki/edit/main/',
          sidebarCollapsed: false,
          beforeDefaultRemarkPlugins: [remarkGithubAdmonitionsToDirectives],
        },
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'https://topper-mc.github.io/Assets/topper/logo.svg',
    navbar: {
      title: 'Topper',
      logo: {
        alt: 'Topper Logo',
        src: 'https://topper-mc.github.io/Assets/topper/logo.svg',
      },
      items: [
        {
          to: '/topper/',
          label: 'Topper',
          position: 'left',
          activeBaseRegex: '^/topper',
        },
        {
          to: '/timedtopper/',
          label: 'TimedTopper',
          position: 'left',
          activeBaseRegex: '^/timedtopper',
        },
        {
          to: '/grouptopper/',
          label: 'GroupTopper',
          position: 'left',
          activeBaseRegex: '^/grouptopper',
        },
        {
          to: '/cachy/',
          label: 'Cachy',
          position: 'left',
          activeBaseRegex: '^/cachy',
        },
        {
          href: 'https://github.com/Topper-MC',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Topper',
          items: [
            {
              label: 'Home',
              to: '/topper/',
            },
            {
              label: 'Documentation',
              to: '/topper/quickstart',
            },
            {
              label: 'Modrinth',
              href: 'https://modrinth.com/plugin/topper-lb',
            },
          ],
        },
        {
          title: 'TimedTopper',
          items: [
            {
              label: 'Home',
              to: '/timedtopper/',
            },
            {
              label: 'Documentation',
              to: '/timedtopper/config',
            },
            {
              label: 'SpigotMC',
              href: 'https://www.spigotmc.org/resources/timedtopper.116995/',
            },
            {
              label: 'Modrinth',
              href: 'https://modrinth.com/plugin/timedtopper',
            },
          ],
        },
        {
          title: 'GroupTopper',
          items: [
            {
              label: 'Home',
              to: '/grouptopper/',
            },
            {
              label: 'Documentation',
              to: '/grouptopper/installation',
            },
            {
              label: 'Modrinth',
              href: 'https://modrinth.com/plugin/grouptopper',
            },
          ],
        },
        {
          title: 'Cachy',
          items: [
            {
              label: 'Home',
              to: '/cachy/',
            },
            {
              label: 'Documentation',
              to: '/cachy/config',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Topper-MC/Cachy',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Organization',
              href: 'https://github.com/Topper-MC',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Topper-MC. Built with Docusaurus.`,
    },
    prism: {
      theme: githubThemes.github,
      darkTheme: githubThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
