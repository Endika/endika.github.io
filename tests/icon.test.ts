import { describe, expect, it } from "vitest";
import { fallbackIcon, initialIcon } from "../src/lib/icon";

describe("initialIcon", () => {
  it("uses the favicon when an icon path is present", () => {
    expect(initialIcon({ icon: "/fav.ico", emoji: "🧾" })).toEqual({
      kind: "favicon",
      value: "/fav.ico",
    });
  });

  it("uses the emoji when no icon path is present", () => {
    expect(initialIcon({ emoji: "🧾" })).toEqual({ kind: "emoji", value: "🧾" });
  });
});

describe("fallbackIcon", () => {
  it("always resolves to the emoji", () => {
    expect(fallbackIcon({ emoji: "🧾" })).toEqual({ kind: "emoji", value: "🧾" });
  });
});
