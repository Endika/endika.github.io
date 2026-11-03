import { describe, expect, it } from "vitest";
import {
  type Contribution,
  formatStars,
  pullRequestUrl,
  sortContributions,
  statusLabel,
} from "../src/lib/contributions";

const c = (repo: string, stars: number, pr: number): Contribution => ({
  repo,
  emoji: "🔧",
  stars,
  pr,
  desc: { en: repo, es: repo },
  state: "open",
});

describe("pullRequestUrl", () => {
  it("builds the pull request url from the repo and number", () => {
    expect(pullRequestUrl(c("vitessio/vitess", 21000, 20700))).toBe(
      "https://github.com/vitessio/vitess/pull/20700",
    );
  });
});

describe("formatStars", () => {
  it("abbreviates thousands with one decimal", () => {
    expect(formatStars(21000)).toBe("21k");
    expect(formatStars(2170)).toBe("2.2k");
    expect(formatStars(1000)).toBe("1k");
  });

  it("leaves counts below a thousand untouched", () => {
    expect(formatStars(610)).toBe("610");
  });
});

describe("sortContributions", () => {
  it("puts bigger repos first and breaks ties by pull request number", () => {
    const sorted = sortContributions([
      c("small/repo", 2170, 144),
      c("big/repo", 21000, 20701),
      c("big/repo", 21000, 20700),
    ]);
    expect(sorted.map((x) => x.pr)).toEqual([20700, 20701, 144]);
  });

  it("does not mutate the input", () => {
    const input = [c("small/repo", 100, 2), c("big/repo", 900, 1)];
    sortContributions(input);
    expect(input.map((x) => x.repo)).toEqual(["small/repo", "big/repo"]);
  });
});

describe("statusLabel", () => {
  it("shows the pull request number and its state", () => {
    expect(statusLabel({ ...c("big/repo", 900, 12), state: "merged" })).toEqual({
      en: "#12 · merged",
      es: "#12 · merged",
    });
  });

  it("names the pull request that landed the fix when it was superseded", () => {
    expect(
      statusLabel({ ...c("traefik/yaegi", 8402, 1731), state: "superseded", supersededBy: 1745 }),
    ).toEqual({ en: "#1731 · fixed in #1745", es: "#1731 · resuelto en #1745" });
  });
});
