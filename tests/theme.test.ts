import { describe, expect, it } from "vitest";
import { isThemePref, nextPref, resolveTheme } from "../src/lib/theme";

describe("resolveTheme", () => {
  it("returns the explicit preference when not auto", () => {
    expect(resolveTheme("light", true)).toBe("light");
    expect(resolveTheme("dark", false)).toBe("dark");
  });

  it("follows the system when auto", () => {
    expect(resolveTheme("auto", true)).toBe("dark");
    expect(resolveTheme("auto", false)).toBe("light");
  });
});

describe("nextPref", () => {
  it("cycles light -> dark -> auto -> light", () => {
    expect(nextPref("light")).toBe("dark");
    expect(nextPref("dark")).toBe("auto");
    expect(nextPref("auto")).toBe("light");
  });
});

describe("isThemePref", () => {
  it("accepts valid values and rejects others", () => {
    expect(isThemePref("auto")).toBe(true);
    expect(isThemePref("blue")).toBe(false);
    expect(isThemePref(null)).toBe(false);
  });
});
