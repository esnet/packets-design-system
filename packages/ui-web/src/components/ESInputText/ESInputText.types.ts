export interface ESInputTextProps extends Partial<HTMLInputElement> {
  variant?: "default" | "branded";
  error?: boolean;
  actionButtons?: string;
}
