import { ComponentPropsWithRef } from "react";

export interface PktsInputSwitchProps extends ComponentPropsWithRef<"input"> {
  variant?: "primary" | "secondary";
  hideIcons?: boolean;
}
// TODO: rename hideIcons to indicator or something
