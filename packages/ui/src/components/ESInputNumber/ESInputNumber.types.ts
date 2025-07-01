import { ComponentPropsWithRef } from "react";

export interface ESInputNumberProps extends ComponentPropsWithRef<"input"> {
  variant?: "default" | "branded";
  error?: boolean;
}
