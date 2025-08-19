import React from "react";
import { DynamicIcon } from "lucide-react/dynamic";

export const getAlertIconByType = (type: string): React.ReactNode => {
  switch (type) {
    case "error":
      return <DynamicIcon name="triangle-alert" />;
    case "success":
      return <DynamicIcon name="circle-check" />;
    case "warning":
      return <DynamicIcon name="alert-circle" />;
    case "info":
    default:
      return <DynamicIcon name="info" />;
  }
};
