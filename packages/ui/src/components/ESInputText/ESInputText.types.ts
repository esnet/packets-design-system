import { ComponentPropsWithRef, ReactNode } from "react";

export interface ESInputTextProps extends ComponentPropsWithRef<"input"> {
  /** The variant style of the input  */
  variant?: "primary" | "branded";
  /** Whether to apply error styling to the input */
  error?: boolean;
  /** Optional action buttons, ideally Lucide SVG icons, that are displayed in the input box */
  actionButtons?: ReactNode[] | ReactNode;
}
