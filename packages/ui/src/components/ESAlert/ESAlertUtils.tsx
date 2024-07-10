import { ESAlertTypes } from "./ESAlert.types";
import {
  CircleAlertIcon,
  TriangleAlertIcon,
  CircleCheckIcon,
  InfoIcon,
} from "lucide-react";

export const getAlertIconByType = (type: ESAlertTypes): React.ReactNode => {
  switch (type) {
    case ESAlertTypes.ERROR:
      return <TriangleAlertIcon />;
    case ESAlertTypes.SUCCESS:
      return <CircleCheckIcon />;
    case ESAlertTypes.WARNING:
      return <CircleAlertIcon />;
    case ESAlertTypes.INFO:
      return <InfoIcon />;

    default:
      return <InfoIcon />;
  }
};
