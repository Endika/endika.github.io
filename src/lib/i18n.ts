export type Lang = "en" | "es";

export const DEFAULT_LANG: Lang = "en";

export function isLang(value: unknown): value is Lang {
  return value === "en" || value === "es";
}

export function resolveLang(stored: unknown): Lang {
  return isLang(stored) ? stored : DEFAULT_LANG;
}

export function nextLang(lang: Lang): Lang {
  return lang === "en" ? "es" : "en";
}
