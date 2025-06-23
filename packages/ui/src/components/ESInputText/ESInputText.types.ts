import { InputHTMLAttributes } from "react";

export interface ESInputTextProps
  extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "branded";
  error?: boolean;
}
