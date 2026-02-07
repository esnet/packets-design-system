import { ComponentPropsWithRef } from "react";

export interface ESInputSearchProps extends ComponentPropsWithRef<"input"> {
  variant?: "primary" | "branded";
  error?: boolean;
  onSearchClick?: () => void;
  onXClick?: () => void;
}
