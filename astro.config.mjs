import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import prefetch from '@astrojs/prefetch';

export default defineConfig({
  site: "https://ipsum-template.vercel.app",
  integrations: [
    tailwind(),
    sitemap(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    prefetch()
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
