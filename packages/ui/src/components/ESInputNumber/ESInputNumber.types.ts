import { ComponentPropsWithRef } from "react";

export interface ESInputNumberProps extends ComponentPropsWithRef<"input"> {
  variant?: "primary" | "branded";
  error?: boolean;
  onAddClick?: () => void;
  onMinusClick?: () => void;
}
