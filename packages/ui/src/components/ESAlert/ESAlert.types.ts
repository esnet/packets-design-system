/* eslint-disable no-unused-vars */
export interface ESAlertProps {
  title: string;
  type?: "error" | "warning" | "info" | "success";
  children: React.ReactNode;
}
