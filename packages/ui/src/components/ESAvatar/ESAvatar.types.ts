export interface ESAvatarProps {
  label: string;
  className?: string;
  backgroundColor?: "grape" | "lime" | "berry" | "orange";
  size?: "small" | "medium" | "large";
  src?: string;
  srcSet?: string;
  isHoverable?: boolean;
  [x: string]: any;
}
