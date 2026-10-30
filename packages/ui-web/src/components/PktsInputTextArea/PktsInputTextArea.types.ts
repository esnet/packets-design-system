export interface PktsInputTextAreaProps {
  value?: string;
  placeholder?: string;
  variant?: "default" | "branded";
  resize?: "vertical" | "horizontal" | "both" | "none" | null;
  disabled?: boolean;
  error?: boolean;
  readonly?: boolean;
}
