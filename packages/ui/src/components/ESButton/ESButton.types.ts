export interface ESButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "branded" | "tertiary" | "destructive"; // Type of Button
  prepend?: React.ReactNode;
  append?: React.ReactNode;
  fill?: boolean;
  disabled?: boolean;
}
