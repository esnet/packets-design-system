import { ComponentPropsWithRef } from "react";

export interface PktsInputSwitchProps extends ComponentPropsWithRef<"input"> {
  variant?: "primary" | "secondary";
  hideIcons?: boolean;
}
