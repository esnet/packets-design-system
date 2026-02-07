import * as React from "react";
import { ESAlertProps } from "./ESAlert.types";

import { clsx } from "clsx";
import { getAlertIconByType } from "./ESAlert.utils";
import { CircleX } from "lucide-react";

/**
 * ESAlert Component
 *
 * Display message with different variants for success, error, warning, info, or branded alerts.
 *
 * @param {ESAlertProps} props
 * @returns {React.FunctionComponent}
 */
const ESAlert: React.FC<ESAlertProps> = ({
  title,
  variant = "info",
  children,
  onClickClose,
}) => {
  const icon = React.useMemo(() => {
    return getAlertIconByType(variant);
  }, [variant]);

  return (
    <div className={clsx("es-alert", `es-${variant}`)}>
      <aside className="icon">{icon}</aside>
      <div className="content">
        <h5 className="title">{title}</h5>
        {children}
      </div>
      <aside className="icon">
        {onClickClose && (
          <button className="close-button" onClick={onClickClose}>
            <CircleX />
          </button>
        )}
      </aside>
    </div>
  );
};

ESAlert.displayName = "ESAlert";

export default ESAlert;
