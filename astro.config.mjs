import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solid from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import prism from "rehype-prism-plus";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://gangeshwark.com",
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [prism],
  },
  prefetch: true,
  integrations: [
    mdx(),
    sitemap(),
    solid(),
    tailwind(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
