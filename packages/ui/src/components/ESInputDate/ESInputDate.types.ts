import { ComponentPropsWithRef } from "react";

export interface ESInputDateProps extends ComponentPropsWithRef<"input"> {
  variant?: "primary" | "branded";
  error?: boolean;
  type?: "date" | "time" | "datetime";
}
