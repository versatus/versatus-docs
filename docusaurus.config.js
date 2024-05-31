// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    require.resolve('docusaurus-lunr-search'),
    require.resolve('docusaurus-plugin-image-zoom'),
  ],
  title: 'Versatus Docs',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Versatus', // Usually your GitHub org/user name.
  projectName: 'Versatus Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/versatus/versatus-docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Versatus Logo',
          src: 'img/logo-1.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'lasrSidebar',
            position: 'left',
            label: 'LASR',
          },
          {
            type: 'docSidebar',
            sidebarId: 'allegraSidebar',
            position: 'left',
            label: 'Allegra',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            to: 'https://github.com/versatus/versatus-docs',
            position: 'right',
            className: 'github-btn'
          },
          {
            to: 'https://discord.com/invite/versatus',
            position: 'right',
            className: 'discord-btn'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/versatus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/versatuslabs',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/versatus/versatus-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Versatus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
