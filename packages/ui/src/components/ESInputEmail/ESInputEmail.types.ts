import { ComponentPropsWithRef } from "react";

export interface ESInputEmailProps extends ComponentPropsWithRef<"input"> {
  variant?: "primary" | "branded";
  error?: boolean;
  onXClick?: () => void;
}
