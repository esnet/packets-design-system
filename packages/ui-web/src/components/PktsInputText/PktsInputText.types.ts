export interface PktsInputTextProps extends Partial<HTMLInputElement> {
  variant?: "default" | "branded";
  error?: boolean;
  readonly?: boolean;
  disabled?: boolean;
}
