export type ThemePref = "light" | "dark" | "auto";
export type ResolvedTheme = "light" | "dark";

const CYCLE: ThemePref[] = ["light", "dark", "auto"];

export function resolveTheme(pref: ThemePref, systemDark: boolean): ResolvedTheme {
  if (pref === "auto") return systemDark ? "dark" : "light";
  return pref;
}

export function nextPref(pref: ThemePref): ThemePref {
  const index = CYCLE.indexOf(pref);
  return CYCLE[(index + 1) % CYCLE.length];
}

export function isThemePref(value: unknown): value is ThemePref {
  return value === "light" || value === "dark" || value === "auto";
}
