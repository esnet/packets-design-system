import { ComponentPropsWithRef } from "react";

export interface ESInputPasswordProps extends ComponentPropsWithRef<"input"> {
  variant?: "default" | "branded";
  error?: boolean;
}
