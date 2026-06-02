export type IconKind = "favicon" | "emoji";

export interface IconState {
  kind: IconKind;
  value: string;
}

export function initialIcon(project: { icon?: string; emoji: string }): IconState {
  return project.icon
    ? { kind: "favicon", value: project.icon }
    : { kind: "emoji", value: project.emoji };
}

export function fallbackIcon(project: { emoji: string }): IconState {
  return { kind: "emoji", value: project.emoji };
}
