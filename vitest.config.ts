import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    globals: true,
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
});
