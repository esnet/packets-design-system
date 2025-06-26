/* eslint-disable no-unused-vars */
export interface ESAlertProps {
  title: string;
  type?: "error" | "warning" | "info" | "success";
  className?: string;
  children: React.ReactNode;
}
