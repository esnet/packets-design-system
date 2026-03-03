import { ComponentPropsWithRef } from "react";

export interface PktsInputSwitchProps extends ComponentPropsWithRef<"input"> {
  variant?: "primary" | "secondary";
  /** Whether to render icon on top of switch indicator. */
  noIcon?: boolean;
}
