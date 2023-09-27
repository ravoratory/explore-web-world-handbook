import { defineConfig } from 'vitepress'

import programmingSidebarItems from './programming/config.mjs';

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
      "/web/": [],
      "/frontend/": [],
      "/backend/": [],
      "/fullstack/": [],
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ravoratory/explore-web-world-handbook",
      },
    ],
  },
});
