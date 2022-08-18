module.exports = {
  title: 'Subnet',
  tagline: 'A Decentralized Web3 Social Media Platform',
  url: 'https://subnet.wtf',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'icon.png',
  organizationName: 'subnetter', // Usually your GitHub org/user name.
  projectName: 'subnet-docs', // Usually your repo name.
  themeConfig: {
    prism: {
        additionalLanguages: ['protobuf'],
        theme: require('prism-react-renderer/themes/dracula')
    },
    navbar: {
      title: 'Subnet',
      logo: {
        alt: 'Subnet Logo',
        src: 'icon.svg',
      },
      items: [
      {
          type: 'docsVersionDropdown',
          position: 'left',

          // Add additional dropdown items at the beginning/end of the dropdown.
          dropdownItemsBefore: [],
          dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],

          // Do not add the link active class when browsing docs.
          dropdownActiveClassDisabled: true,
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
              href: 'https://discord.gg/SBUd85xNf9',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Subnet_platform',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/subnetdao',
            },
          ],
        },
        {
          title: 'Code',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/subnetter/subnet-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} by the Subnet Authors. This work is licensed under the <a href="/docs/license"> Subnet License</a>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/upstter/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/subnetter/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
