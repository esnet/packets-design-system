import { ComponentPropsWithRef } from "react";

export interface PktsInputSearchProps extends ComponentPropsWithRef<"input"> {
  variant?: "primary" | "branded";
  error?: boolean;
  onSearchClick?: () => void;
  onXClick?: () => void;
}
