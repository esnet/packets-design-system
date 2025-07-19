import { ComponentPropsWithRef, ReactNode } from "react";

export interface ESInputDatePickerProps extends ComponentPropsWithRef<"input"> {
  variant?: "default" | "branded";
  error?: boolean;
  actionButtons?: ReactNode[] | ReactNode;
}
