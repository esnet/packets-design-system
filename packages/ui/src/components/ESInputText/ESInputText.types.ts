import { ComponentPropsWithRef, ReactNode } from "react";

export interface ESInputTextProps extends ComponentPropsWithRef<"input"> {
  variant?: "primary" | "branded";
  error?: boolean;
  actionButtons?: ReactNode[] | ReactNode;
}
