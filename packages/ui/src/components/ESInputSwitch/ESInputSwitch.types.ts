import { ComponentPropsWithRef } from "react";

export interface ESInputSwitchProps
  extends Omit<ComponentPropsWithRef<"input">, "type"> {
  variant?: "primary" | "secondary";
  /** Whether to not display the icon on the switch. */
  noIcon?: boolean;
}
