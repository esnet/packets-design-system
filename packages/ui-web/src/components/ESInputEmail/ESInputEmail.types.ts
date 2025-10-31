export interface ESInputEmailProps extends Partial<HTMLInputElement> {
  variant?: "default" | "branded";
  error?: boolean;
  onXClick?: () => void;
}
