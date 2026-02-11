import * as React from "react";

export interface PktsAlertProps {
  /** The title line of the alert */
  title: string;
  variant?: "error" | "warning" | "info" | "success" | "branded";
  children: React.ReactNode;
  /** Callback fired when clicking the X icon on the top right, typically used to make the alert go away. */
  onClickClose?: () => void;
}
