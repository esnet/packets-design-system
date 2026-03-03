import { ComponentPropsWithRef } from "react";

export interface PktsInputNumberProps extends ComponentPropsWithRef<"input"> {
  variant?: "primary" | "branded";
  error?: boolean;
  onAddClick?: () => void;
  onMinusClick?: () => void;
}
