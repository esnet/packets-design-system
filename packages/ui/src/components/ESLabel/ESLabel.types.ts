import { ComponentPropsWithoutRef } from "react";
import * as React from "react";

export interface ESLabelProps extends ComponentPropsWithoutRef<"label"> {
  error?: React.ReactNode;
  label: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
}
