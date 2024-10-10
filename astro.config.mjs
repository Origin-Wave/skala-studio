import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  site: "https://www.skala-studio.co.uk",
  scopedStyleStrategy: "where",
  vite: {
    resolve: {
      alias: {
        "@styles/": `${path.resolve(__dirname, "src")}/assets/styles/`,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
