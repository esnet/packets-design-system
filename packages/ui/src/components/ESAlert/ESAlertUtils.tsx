import React from "react";
import {
  CircleAlertIcon,
  TriangleAlertIcon,
  CircleCheckIcon,
  InfoIcon,
} from "lucide-react";

export const getAlertIconByType = (type: string): React.ReactNode => {
  switch (type) {
    case "error":
      return <TriangleAlertIcon />;
    case "success":
      return <CircleCheckIcon />;
    case "warning":
      return <CircleAlertIcon />;
    case "info":
    default:
      return <InfoIcon />;
  }
};
