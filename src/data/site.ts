import type { Lang } from "../lib/i18n";

export interface SiteLink {
  label: string;
  href: string;
}

export interface SiteContent {
  name: string;
  tagline: string;
  promptLabel: string;
  bio: Record<Lang, string>;
  links: SiteLink[];
}

export const coffee: SiteLink = {
  label: "☕ Buy me a coffee",
  href: "https://buymeacoffee.com/endika2i",
};

export const site: SiteContent = {
  name: "Endika Iglesias",
  tagline: "$ developer · indie maker",
  promptLabel: "~/endika",
  bio: {
    en: "I build small, useful apps that actually ship — expense splitters, converters, Flipper Zero tools. Mostly solo, mostly weekends, mostly instead of sleeping. At this point my side projects have side projects.",
    es: "Construyo apps pequeñas y útiles que de verdad llegan a publicarse: repartidores de gastos, conversores, herramientas para Flipper Zero. Casi siempre en solitario, casi siempre los findes, casi siempre en vez de dormir. A estas alturas mis proyectos paralelos tienen proyectos paralelos.",
  },
  links: [
    { label: "GitHub", href: "https://github.com/Endika" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/endika-i-0420a731/" },
    { label: "LeetCode", href: "https://leetcode.com/u/endika_iglesias/" },
    { label: "Instagram", href: "https://www.instagram.com/endika_iglesias/" },
    { label: "Email", href: "mailto:endika2@gmail.com" },
    coffee,
  ],
};
