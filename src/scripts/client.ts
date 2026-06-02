import { resolveLang } from "../lib/i18n";
import { isThemePref, nextPref, resolveTheme } from "../lib/theme";
import type { ThemePref } from "../lib/theme";

const THEME_KEY = "theme-pref";
const LANG_KEY = "lang";
const media = window.matchMedia("(prefers-color-scheme: dark)");
const root = document.documentElement;

function currentPref(): ThemePref {
  const value = root.dataset.themePref;
  return isThemePref(value) ? value : "auto";
}

function applyTheme(pref: ThemePref): void {
  root.dataset.theme = resolveTheme(pref, media.matches);
  root.dataset.themePref = pref;
  document.querySelector("[data-theme-toggle]")?.setAttribute("data-state", pref);
}

function applyLang(lang: "en" | "es"): void {
  root.lang = lang;
  root.dataset.lang = lang;
  for (const el of document.querySelectorAll<HTMLElement>("[data-en]")) {
    const text = lang === "es" ? el.dataset.es : el.dataset.en;
    if (text != null) el.textContent = text;
  }
  document.querySelector("[data-lang-toggle]")?.setAttribute("data-state", lang);
}

document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
  const next = nextPref(currentPref());
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
});

media.addEventListener("change", () => {
  if (currentPref() === "auto") applyTheme("auto");
});

document.querySelector("[data-lang-toggle]")?.addEventListener("click", () => {
  const next = resolveLang(root.dataset.lang) === "en" ? "es" : "en";
  localStorage.setItem(LANG_KEY, next);
  applyLang(next);
});

for (const img of document.querySelectorAll<HTMLImageElement>("img[data-favicon]")) {
  img.addEventListener("error", () => {
    img.style.display = "none";
    const emoji = img.closest(".icon")?.querySelector<HTMLElement>("[data-emoji]");
    if (emoji) emoji.style.display = "";
  });
}

applyTheme(currentPref());
applyLang(resolveLang(root.dataset.lang));
