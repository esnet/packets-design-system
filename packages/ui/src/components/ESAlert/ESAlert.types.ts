/* eslint-disable no-unused-vars */
export enum ESAlertTypes {
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
  SUCCESS = "success",
}

export interface ESAlertProps {
  title: string;
  type?: ESAlertTypes;
  children: React.ReactNode;
}
