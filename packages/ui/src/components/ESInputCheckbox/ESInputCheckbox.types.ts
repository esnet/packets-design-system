import { ComponentPropsWithRef } from "react";

export interface ESInputCheckboxProps extends ComponentPropsWithRef<"input"> {
  variant?: "primary" | "branded";
}
