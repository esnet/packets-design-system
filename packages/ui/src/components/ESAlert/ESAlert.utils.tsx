import React from "react";
import ESIcon from "../ESIcon";

export const getAlertIconByType = (type: string): React.ReactNode => {
  switch (type) {
    case "error":
      return <ESIcon name="triangle-alert" />;
    case "success":
      return <ESIcon name="circle-check" />;
    case "warning":
      return <ESIcon name="alert-circle" />;
    case "info":
    default:
      return <ESIcon name="info" />;
  }
};
