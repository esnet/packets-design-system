import * as React from "react";
import { ESAlertProps } from "./ESAlert.types";

import styles from "./ESAlert.module.css";
import { clsx } from "clsx";
import { getAlertIconByType } from "./ESAlert.utils";
import ESIcon from "../ESIcon";

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
    <div className={clsx(styles.ESAlert, styles[variant])}>
      <aside className={styles.icon}>{icon}</aside>
      <div className={styles.content}>
        <h5 className={styles.title}>{title}</h5>
        {children}
      </div>
      <aside className={styles.icon}>
        {onClickClose && (
          <button className={styles.closeButton} onClick={onClickClose}>
            <ESIcon name="circle-x" />
          </button>
        )}
      </aside>
    </div>
  );
};

ESAlert.displayName = "ESAlert";

export default ESAlert;
