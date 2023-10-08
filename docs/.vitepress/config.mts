import { defineConfig } from 'vitepress'

import programmingSidebarItems from './config/programming/config.mjs';
import linuxSidebarItems from './config/linux/config.mjs';
import gitSidebarItems from './config/git/config.mjs';
import webSidebarItems from './config/web/config.mjs';
import frontendSidebarItems from './config/frontend/config.mjs';
import backendSidebarItems from './config/backend/config.mjs';
import fullstackSidebarItems from './config/fullstack/config.mjs';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exploring the Web World",
  description: "basic web engineer",
  base: "/explore-web-world-handbook",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: {
      "/programming/": programmingSidebarItems,
      "/linux/": linuxSidebarItems,
      "/git/": gitSidebarItems,
      "/web/": webSidebarItems,
      "/frontend/": frontendSidebarItems,
      "/backend/": backendSidebarItems,
      "/fullstack/": fullstackSidebarItems,
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ravoratory/explore-web-world-handbook",
      },
    ],
  },
});
