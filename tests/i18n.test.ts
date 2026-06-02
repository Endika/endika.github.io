import { describe, expect, it } from "vitest";
import { DEFAULT_LANG, isLang, nextLang, resolveLang } from "../src/lib/i18n";

describe("resolveLang", () => {
  it("returns a stored valid language", () => {
    expect(resolveLang("es")).toBe("es");
    expect(resolveLang("en")).toBe("en");
  });

  it("falls back to the default for invalid/missing values", () => {
    expect(resolveLang("fr")).toBe(DEFAULT_LANG);
    expect(resolveLang(null)).toBe(DEFAULT_LANG);
    expect(DEFAULT_LANG).toBe("en");
  });
});

describe("nextLang", () => {
  it("toggles between en and es", () => {
    expect(nextLang("en")).toBe("es");
    expect(nextLang("es")).toBe("en");
  });
});

describe("isLang", () => {
  it("validates language codes", () => {
    expect(isLang("en")).toBe(true);
    expect(isLang("de")).toBe(false);
  });
});
