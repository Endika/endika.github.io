export type ContributionState = "open" | "merged" | "closed" | "superseded";

interface ContributionBase {
  repo: string;
  emoji: string;
  stars: number;
  pr: number;
  desc: { en: string; es: string };
}

/** A superseded pull request was closed because another one landed the same fix. */
export type Contribution = ContributionBase &
  (
    | { state: Exclude<ContributionState, "superseded"> }
    | { state: "superseded"; supersededBy: number }
  );

export function pullRequestUrl(contribution: Contribution): string {
  return `https://github.com/${contribution.repo}/pull/${contribution.pr}`;
}

export function formatStars(stars: number): string {
  return stars >= 1000 ? `${Math.round(stars / 100) / 10}k` : String(stars);
}

/** Biggest repositories first, then by pull request number, so the order is stable. */
export function sortContributions(contributions: Contribution[]): Contribution[] {
  return [...contributions].sort((a, b) => b.stars - a.stars || a.pr - b.pr);
}

export function statusLabel(contribution: Contribution): { en: string; es: string } {
  if (contribution.state === "superseded") {
    return {
      en: `#${contribution.pr} · fixed in #${contribution.supersededBy}`,
      es: `#${contribution.pr} · resuelto en #${contribution.supersededBy}`,
    };
  }
  const label = `#${contribution.pr} · ${contribution.state}`;
  return { en: label, es: label };
}
