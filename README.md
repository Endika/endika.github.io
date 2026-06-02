# endika.github.io

Personal landing / CV for Endika Iglesias — a terminal/dev styled card with a
curated grid of projects, light/dark theming and an EN/ES toggle.

Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

Requires Node >= 22.12.0 (see `.nvmrc`).

```bash
npm install
npm run dev      # local dev server
npm test         # unit + component tests
npm run lint     # biome
npm run build    # static build to dist/
```

## Add a project

Edit `src/data/projects.ts` and add an entry:

```ts
{
  name: "My App",
  emoji: "🚀",
  icon: "https://myapp.example/favicon.ico", // optional; falls back to emoji
  desc: { en: "What it does.", es: "Qué hace." },
  url: "https://myapp.example",
  type: "live", // "live" for hosted apps, "repo" for source-only
  tag: "PWA",
  category: "web apps", // ordered via categoryOrder in the same file
}
```
