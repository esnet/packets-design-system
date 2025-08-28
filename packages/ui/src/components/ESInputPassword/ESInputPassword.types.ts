import { ComponentPropsWithRef } from "react";

export interface ESInputPasswordProps extends ComponentPropsWithRef<"input"> {
  variant?: "primary" | "branded";
  error?: boolean;
}
