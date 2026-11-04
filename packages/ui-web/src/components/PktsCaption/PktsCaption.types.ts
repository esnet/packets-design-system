export type PktsCaptionAlign = "center" | "left";

export interface PktsCaptionProps {
  label?: string;
  align?: PktsCaptionAlign;
  italic?: boolean;
  caps?: boolean;
}
