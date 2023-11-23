import {defineConfig} from 'astro/config';

import svelte from "@astrojs/svelte";
import lightningcss from "vite-plugin-lightningcss";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  server: {
    port: 3002
  },
  site: "https://ui-generator.nordcode.agency",
  vite: {
    plugins: [
      lightningcss({
        browserslist: ">= 0.25%",
        drafts: {
          customMedia: true,
          nesting: true,
        },
      }),
    ],
  },
});
