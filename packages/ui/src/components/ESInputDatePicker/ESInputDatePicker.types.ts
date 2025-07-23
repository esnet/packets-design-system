import { ComponentPropsWithRef, ReactNode } from "react";

export interface ESInputDatePickerProps extends ComponentPropsWithRef<"input"> {
  variant?: "primary" | "branded";
  error?: boolean;
  actionButtons?: ReactNode[] | ReactNode;
}
