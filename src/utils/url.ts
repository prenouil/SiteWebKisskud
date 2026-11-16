/**
 * Préfixe un chemin interne avec le `base` configuré dans astro.config.mjs.
 * Indispensable tant que le site est servi dans un sous-dossier (GitHub Pages).
 * Toujours écrire les liens internes ainsi : href={url('/contact')}
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Retire le `base` d'un chemin (pour comparer avec les liens de navigation). */
export function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const path = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return path.replace(/\/$/, '') || '/';
}
