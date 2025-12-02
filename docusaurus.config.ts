import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {

  title: 'akkoyun.net',
  tagline: 'Elektronik, Yazılım, IoT ve Daha Fazlası',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://akkoyun.net',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'akkoyun',
  projectName: 'akkoyun_net',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },

  // Presets configuration
  presets: [
    [
      'classic',
      {

        // Docs configuration
        docs: false,

        // Blog configuration
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/akkoyun/akkoyun_net/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },

        // Theme configuration
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Plugins configuration
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'kitaplar',
        path: 'kitaplar',
        routeBasePath: 'kitaplar',
        sidebarPath: require.resolve('./sidebarsKitaplar.ts'),
        //editUrl: 'https://github.com/akkoyun/akkoyun_net/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'makaleler',
        path: 'makaleler',
        routeBasePath: 'makaleler',
        sidebarPath: require.resolve('./sidebarsMakaleler.ts'),
        //editUrl: 'https://github.com/akkoyun/akkoyun_net/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'acik-kaynak',
        path: 'acik-kaynak',
        routeBasePath: 'acik-kaynak',
        sidebarPath: require.resolve('./sidebarsAcikKaynak.ts'),
        //editUrl: 'https://github.com/akkoyun/akkoyun_net/tree/main/',
      },
    ],
  ],

  // Theme configuration
  themeConfig: {

    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },

    // Page Navbar
    navbar: {
      title: 'Günce Akkoyun',
      logo: {
        alt: 'akkoyun.net logosu',
        src: 'img/logo.svg', // ileride kendi logonu koyarsın
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'kitaplarSidebar',
          docsPluginId: 'kitaplar',
          label: 'Kitaplar',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'makalelerSidebar',
          docsPluginId: 'makaleler',
          label: 'Makaleler',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'acikKaynakSidebar',
          docsPluginId: 'acik-kaynak',
          label: 'Açık Kaynak',
          position: 'left',
        },
        { to: '/blog',     label: 'Blog',     position: 'left' },
        { to: '/hakkimda', label: 'Hakkımda', position: 'right' },
        {
          href: 'https://github.com/akkoyun',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    // Page Footer
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Site',
          items: [
            { label: 'Kitaplar',    to: '/kitaplar' },
            { label: 'Makaleler',   to: '/makaleler' },
            { label: 'Açık Kaynak', to: '/acik-kaynak' },
            { label: 'Blog',        to: '/blog' },
            { label: 'Hakkımda',    to: '/hakkimda' },
          ],
        },
        {
          title: 'Sosyal',
          items: [
            {label: 'GitHub', href: 'https://github.com/akkoyun',},
            {label: 'Linkedin', href: 'https://www.linkedin.com/in/akkoyun/',},
          ],
        },
        {
          title: 'Projeler',
          items: [
            // İleride gerçek linkleri buraya ekleriz
            // { label: 'PowerStat', href: 'https://...' },
            // { label: 'WeatherStat', href: 'https://...' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mehmet Günce Akkoyun.`,
    },

    // Syntax highlighting
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

  } satisfies Preset.ThemeConfig,

};

export default config;
