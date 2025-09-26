import { ComponentPropsWithoutRef } from "react";

export interface ESInputSelectProps
  extends Omit<
    ComponentPropsWithoutRef<"input">,
    "value" | "defaultValue" | "onChange"
  > {
  error?: boolean;
  variant?: "primary" | "branded";
  options: string[];
  /** HTML input */
  value?: string;
  defaultValue?: string;
  onChange?: (next: string) => void;
}
