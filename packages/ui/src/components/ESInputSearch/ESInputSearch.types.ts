import { ComponentPropsWithRef } from "react";

export interface ESInputSearchProps extends ComponentPropsWithRef<"input"> {
  variant?: "default" | "branded";
  error?: boolean;
  onSearchClick?: () => void;
  onXClick?: () => void;
}
