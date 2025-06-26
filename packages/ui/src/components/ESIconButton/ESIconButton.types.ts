import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ESIconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant: "primary" | "secondary" | "branded" | "tertiary" | "destructive"; // Type of Button
  square?: boolean;
  disabled?: boolean;
}
