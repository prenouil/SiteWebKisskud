/**
 * Configuration centrale du site.
 * Toutes les informations "métier" (nom, coordonnées, navigation…) sont ici,
 * pour éviter de les dupliquer dans les pages et composants.
 * À compléter avec les spécifications de l'activité.
 */
export const site = {
  name: 'Kisskud',
  description: 'Site professionnel de Kisskud — description à compléter.',
  url: 'https://www.example.com', // À remplacer par le domaine définitif (voir aussi astro.config.mjs)
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
  { label: 'Accueil', href: '/' },
  { label: 'Contact', href: '/contact' },
] as const;
