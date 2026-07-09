export type ProjectType = "live" | "repo";

export interface Project {
  name: string;
  emoji: string;
  icon?: string;
  desc: { en: string; es: string };
  url: string;
  type: ProjectType;
  tag: string;
  category: string;
}

export interface CategoryGroup {
  category: string;
  projects: Project[];
}

export function groupByCategory(projects: Project[], order: string[]): CategoryGroup[] {
  const byCategory = new Map<string, Project[]>();
  for (const project of projects) {
    const list = byCategory.get(project.category) ?? [];
    list.push(project);
    byCategory.set(project.category, list);
  }

  // Sort each category's projects alphabetically by name (case-insensitive).
  for (const list of byCategory.values()) {
    list.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
  }

  const groups: CategoryGroup[] = [];
  const seen = new Set<string>();
  for (const category of order) {
    const list = byCategory.get(category);
    if (list) {
      groups.push({ category, projects: list });
      seen.add(category);
    }
  }

  const remaining = [...byCategory.keys()].filter((c) => !seen.has(c)).sort();
  for (const category of remaining) {
    groups.push({ category, projects: byCategory.get(category) as Project[] });
  }

  return groups;
}
