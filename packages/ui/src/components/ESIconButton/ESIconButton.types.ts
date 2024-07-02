export interface ESIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "branded" | "tertiary" | "destructive"; // Type of Button
  disabled?: boolean;
}
