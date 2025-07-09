import { ComponentPropsWithRef, ReactNode } from "react";

export interface ESInputTextProps extends ComponentPropsWithRef<"input"> {
  /** variant */
  variant?: "default" | "branded";
  /** error state */
  error?: boolean;
  actionButtons?: ReactNode[];
}
