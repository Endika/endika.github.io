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

export const site: SiteContent = {
  name: "Endika Iglesias",
  tagline: "$ developer · indie maker",
  promptLabel: "~/endika",
  bio: {
    en: "I build small, useful apps that ship — expense splitters, converters, Flipper Zero tools and more. Mostly solo, mostly weekends.",
    es: "Construyo apps pequeñas y útiles que llegan a publicarse: repartidores de gastos, conversores, herramientas para Flipper Zero y más. Casi siempre en solitario, casi siempre los findes.",
  },
  links: [
    { label: "GitHub", href: "https://github.com/Endika" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/endika-i-0420a731/" },
    { label: "LeetCode", href: "https://leetcode.com/u/endika_iglesias/" },
    { label: "Email", href: "mailto:endika2@gmail.com" },
  ],
};
