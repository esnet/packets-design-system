import * as React from "react";
import { PktsAlertProps } from "./PktsAlert.types";

import { clsx } from "clsx";
import { getAlertIconByType } from "./PktsAlert.utils";
import { CircleX } from "lucide-react";

/**
 * ESAlert Component
 *
 * Display message with different variants for success, error, warning, info, or branded alerts.
 *
 * @param {PktsAlertProps} props
 * @returns {React.FunctionComponent}
 */
const PktsAlert: React.FC<PktsAlertProps> = ({
  title,
  variant = "info",
  children,
  onClickClose,
}) => {
  const icon = React.useMemo(() => {
    return getAlertIconByType(variant);
  }, [variant]);

  return (
    <div className={clsx("pkts-alert", `pkts-${variant}`)}>
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

PktsAlert.displayName = "PktsAlert";

export default PktsAlert;
