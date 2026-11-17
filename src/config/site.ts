/**
 * Configuration centrale du site.
 * Toutes les informations "métier" (nom, coordonnées, navigation…) sont ici,
 * pour éviter de les dupliquer dans les pages et composants.
 * À compléter avec les spécifications de l'activité.
 */
export const site = {
  name: 'Lumenescit',
  description:
    'Lumenescit, accompagnement en performance humaine et organisationnelle : faire émerger la clarté de la complexité.',
  tagline: 'Faire émerger la clarté de la complexité',
  mention: 'Accompagnement en performance humaine et organisationnelle',
  owner: 'Karine RENOUIL',
  role: 'Consultante en transformation',
  url: 'https://prenouil.github.io/SiteWebKisskud', // À remplacer par le domaine définitif (voir aussi astro.config.mjs)
  locale: 'fr_FR',
  lang: 'fr',
  contact: {
    email: 'contact@example.com',
    phone: '',
    address: '',
  },
  social: {
    // facebook: 'https://facebook.com/...',
    // instagram: 'https://instagram.com/...',
    // linkedin: 'https://linkedin.com/...',
  } as Record<string, string>,
} as const;

export const navigation = [
  { label: 'Approche', href: '/#approche' },
  { label: 'Offres', href: '/#offres' },
  { label: 'Pour qui', href: '/#public' },
  { label: 'Contact', href: '/#contact' },
] as const;
