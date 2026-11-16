# Site web Kisskud

Site professionnel construit avec [Astro](https://astro.build), TypeScript et [Tailwind CSS](https://tailwindcss.com).

## Prérequis

- Node.js 22.23.4 ou plus récent (24 recommandé)
- npm

## Démarrage

```bash
npm install
npm run dev        # serveur de développement sur http://localhost:4321
```

## Commandes

| Commande               | Rôle                                                   |
| ---------------------- | ------------------------------------------------------ |
| `npm run dev`          | Serveur de développement avec rechargement automatique |
| `npm run build`        | Génère le site statique dans `dist/`                   |
| `npm run preview`      | Prévisualise le build de production                    |
| `npm run check`        | Vérifie les types TypeScript / Astro                   |
| `npm run format`       | Formate le code avec Prettier                          |
| `npm run format:check` | Vérifie le formatage (utilisé par la CI)               |

## Structure

```
public/                 Fichiers servis tels quels (favicon, robots.txt, images OG…)
src/
  assets/               Images optimisées par Astro (logos, photos)
  components/           Composants réutilisables (Header, Footer, SEO, Section…)
  config/site.ts        Infos centrales : nom, coordonnées, navigation, réseaux sociaux
  layouts/              Gabarits de page (BaseLayout : <head>, SEO, header, footer)
  pages/                Une page = un fichier = une URL
  styles/global.css     Tailwind + charte graphique (couleurs, polices)
.github/workflows/      Intégration continue (format, types, build)
```

## Mise en ligne

Le site est déployé automatiquement sur GitHub Pages à chaque push sur `main`
(workflow `.github/workflows/deploy.yml`) : https://prenouil.github.io/SiteWebKisskud/

Le site étant servi dans un sous-dossier, **les liens internes doivent passer par `url()`**
(`src/utils/url.ts`) : `href={url('/contact')}` et non `href="/contact"`.

## À compléter

- Domaine définitif : `astro.config.mjs` (`site`), `src/config/site.ts` (`url`) et `public/robots.txt`
- Charte graphique : `src/styles/global.css` (bloc `@theme`)
- Image de partage réseaux sociaux : `public/og-image.png` (1200×630)
- Mentions légales et politique de confidentialité
- Hébergement et déploiement
