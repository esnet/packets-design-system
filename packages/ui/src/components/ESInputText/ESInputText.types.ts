import { ComponentPropsWithRef, ReactNode } from "react";

export interface ESInputTextProps extends ComponentPropsWithRef<"input"> {
  variant?: "default" | "branded";
  error?: boolean;
  actionButtons?: ReactNode[];
}
