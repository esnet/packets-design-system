import { ComponentPropsWithoutRef } from "react";
import * as React from "react";

export interface ESLabelProps extends ComponentPropsWithoutRef<"label"> {
  error?: React.ReactNode;
  label: React.ReactNode;
  labelPlacement?: "top" | "left" | "right" | "bottom";
  disabled?: boolean;
  required?: boolean;
}
