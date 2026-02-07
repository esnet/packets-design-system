import { ComponentPropsWithRef } from "react";

export interface ESInputSwitchProps extends ComponentPropsWithRef<"input"> {
  variant?: "primary" | "secondary";
  hideIcons?: boolean;
}
