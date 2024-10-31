export interface ESIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: "string";
  variant: "primary" | "secondary" | "branded" | "tertiary" | "destructive"; // Type of Button
  square?: boolean;
  disabled?: boolean;
}
