// @ts-check
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./src/utils/readingtime";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

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

  integrations: [icon(), mdx()],
});
