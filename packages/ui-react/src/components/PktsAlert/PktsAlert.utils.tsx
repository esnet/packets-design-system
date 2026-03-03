import React from "react";
import { AlertCircle, CircleCheck, Info, TriangleAlert } from "lucide-react";

export const getAlertIconByType = (type: string): React.ReactNode => {
  switch (type) {
    case "error":
      return <TriangleAlert />;
    case "success":
      return <CircleCheck />;
    case "warning":
      return <AlertCircle />;
    case "info":
    default:
      return <Info />;
  }
};
