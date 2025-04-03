// @ts-check
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./src/utils/readingtime";

import icon from "astro-icon";

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
      theme: "dracula",
    },
    remarkPlugins: [remarkReadingTime],
  },

  integrations: [icon()],
});
