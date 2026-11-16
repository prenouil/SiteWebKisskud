// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Domaine définitif du site (utilisé pour le sitemap et les URLs canoniques).
  // À garder synchronisé avec src/config/site.ts
  site: 'https://www.example.com',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
