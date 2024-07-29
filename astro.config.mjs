import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://davidpizarro151.github.io',
  base: '/davidpizarro.github.io',
  integrations: [tailwind()]
});