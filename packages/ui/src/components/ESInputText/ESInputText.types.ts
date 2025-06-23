import { ChangeEventHandler, FocusEventHandler } from "react";

export interface ESInputTextProps {
  id: string;
  className?: string;
  placeholder?: string;
  variant?: "default" | "branded";
  disabled?: boolean;
  error?: boolean;
  label?: string;
  initialValue?: string;
  ariaLabel?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}
