import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import ProjectGrid from "../src/components/ProjectGrid.astro";
import type { CategoryGroup } from "../src/lib/projects";

const groups: CategoryGroup[] = [
  {
    category: "web apps",
    projects: [
      {
        name: "WithFavicon",
        emoji: "🧾",
        icon: "/fav.ico",
        desc: { en: "live one", es: "en vivo" },
        url: "https://example.com",
        type: "live",
        tag: "PWA",
        category: "web apps",
      },
    ],
  },
  {
    category: "flipper zero",
    projects: [
      {
        name: "EmojiOnly",
        emoji: "🎯",
        desc: { en: "repo one", es: "repo" },
        url: "https://github.com/Endika/x",
        type: "repo",
        tag: "Flipper",
        category: "flipper zero",
      },
    ],
  },
];

describe("ProjectGrid", () => {
  it("renders category headings, counts and cards", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(ProjectGrid, { props: { groups } });

    expect(html).toContain("// web apps");
    expect(html).toContain("// flipper zero");
    expect(html).toContain("WithFavicon");
    expect(html).toContain("EmojiOnly");
  });

  it("uses a favicon img when icon is set and emoji-only otherwise", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(ProjectGrid, { props: { groups } });

    expect(html).toContain('src="/fav.ico"');
    expect(html).toContain("data-favicon");
    expect(html).toContain("🎯");
  });

  it("marks live vs repo cards distinctly", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(ProjectGrid, { props: { groups } });

    expect(html).toContain('data-type="live"');
    expect(html).toContain('data-type="repo"');
    expect(html).toContain("live →");
    expect(html).toContain("repo →");
  });
});
