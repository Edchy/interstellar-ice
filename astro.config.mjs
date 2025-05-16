// @ts-check
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./src/utils/readingtime";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import og from "astro-og";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
  markdown: {
    shikiConfig: {
      theme: "plastic",
    },
    remarkPlugins: [remarkReadingTime],
  },
  site: "https://nope.digital/",
  integrations: [icon(), mdx(), sitemap(), og()],
});