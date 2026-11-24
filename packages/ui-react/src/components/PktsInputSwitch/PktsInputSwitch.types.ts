import { ComponentPropsWithRef } from "react";

export interface PktsInputSwitchProps extends ComponentPropsWithRef<"input"> {
  variant?: "default" | "branded";
}
