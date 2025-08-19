import * as React from "react";

export interface ESAlertProps {
  title: string;
  variant?: "error" | "warning" | "info" | "success" | "branded";
  children: React.ReactNode;
}
