export interface PktsButtonProps extends Partial<HTMLButtonElement> {
  label: string;
  variant?: "default" | "branded" | "gradient" | "destructive" | "success" | "minimal"| "access"| "borderless";
  type?: "button" | "submit" | "reset";
  size?: "medium" | "xxlarge";
  fill?: boolean;
  disabled?: boolean;
  as?: "button" | "a";
  href?: string;
  onClick?: (e: Event) => void;
}

//prepend, append, children (aka label)
