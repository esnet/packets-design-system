import { ComponentPropsWithRef } from "react";

export interface PktsInputPasswordProps extends ComponentPropsWithRef<"input"> {
  variant?: "primary" | "branded";
  error?: boolean;
}
