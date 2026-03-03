import { ComponentPropsWithoutRef } from "react";
import * as React from "react";

export interface PktsLabelProps extends ComponentPropsWithoutRef<"label"> {
  error?: React.ReactNode;
  label: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
}
