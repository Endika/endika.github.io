import { describe, expect, it } from "vitest";
import { type Project, groupByCategory } from "../src/lib/projects";

const p = (name: string, category: string): Project => ({
  name,
  emoji: "🔧",
  desc: { en: name, es: name },
  url: `https://example.com/${name}`,
  type: "repo",
  tag: "tool",
  category,
});

describe("groupByCategory", () => {
  it("orders groups by the declared order and preserves item order", () => {
    const projects = [p("a", "web apps"), p("b", "flipper zero"), p("c", "web apps")];
    const groups = groupByCategory(projects, ["web apps", "flipper zero"]);
    expect(groups.map((g) => g.category)).toEqual(["web apps", "flipper zero"]);
    expect(groups[0].projects.map((x) => x.name)).toEqual(["a", "c"]);
  });

  it("appends categories missing from the order list, sorted alphabetically", () => {
    const projects = [p("a", "zeta"), p("b", "alpha"), p("c", "web apps")];
    const groups = groupByCategory(projects, ["web apps"]);
    expect(groups.map((g) => g.category)).toEqual(["web apps", "alpha", "zeta"]);
  });

  it("returns an empty array for no projects", () => {
    expect(groupByCategory([], ["web apps"])).toEqual([]);
  });
});
