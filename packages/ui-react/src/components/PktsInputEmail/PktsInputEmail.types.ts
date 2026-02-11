import { ComponentPropsWithRef } from "react";

export interface PktsInputEmailProps extends ComponentPropsWithRef<"input"> {
  variant?: "primary" | "branded";
  error?: boolean;
  onXClick?: () => void;
}
