export type PktsTitleSectionDirection = "horizontal" | "vertical";
export type PktsTitleSectionIconTarget = "title" | "subtitle";
export type PktsTitleSectionIconPosition = "start" | "end";

export interface PktsTitleSectionProps {
  title?: string;
  subtitle?: string;
  icon?: string;
  iconTarget?: PktsTitleSectionIconTarget;
  iconPosition?: PktsTitleSectionIconPosition;
  direction?: PktsTitleSectionDirection;
  background?: boolean;
}