import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exploring the World of the Web",
  description: "basic web engineer  ",
  base: "/explore-web-world-handbook",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Example2",
        items: [{ text: "AAAAAAAAa", link: "/aaaa" }],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ravoratory/explore-web-world-handbook",
      },
    ],
  },
});
