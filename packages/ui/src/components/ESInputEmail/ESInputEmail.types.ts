import { ComponentPropsWithRef } from "react";

export interface ESInputEmailProps extends ComponentPropsWithRef<"input"> {
  variant?: "default" | "branded";
  error?: boolean;
  onXClick?: () => void;
}
