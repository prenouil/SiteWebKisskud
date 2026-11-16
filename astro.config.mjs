// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Adresse du site (utilisée pour le sitemap et les URLs canoniques).
  // À garder synchronisé avec src/config/site.ts et public/robots.txt
  // Aperçu actuel : GitHub Pages, servi dans le sous-dossier /SiteWebKisskud.
  // Avec un nom de domaine définitif : mettre ce domaine dans `site` et supprimer `base`.
  site: 'https://prenouil.github.io',
  base: '/SiteWebKisskud',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
