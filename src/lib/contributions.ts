export type ContributionState = "open" | "merged" | "closed";

export interface Contribution {
  repo: string;
  emoji: string;
  stars: number;
  pr: number;
  desc: { en: string; es: string };
  state: ContributionState;
}

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
