import * as React from "react";
import { ESAlertProps } from "./ESAlert.types";
import { getAlertIconByType } from "./ESAlertUtils";

import styles from "./ESAlert.module.css";
import { clsx } from "clsx";

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
}) => {
  const icon = React.useMemo(() => {
    return getAlertIconByType(variant);
  }, [variant]);

  return (
    <section className={clsx(styles.ESAlert, styles[variant])}>
      <aside className={styles.icon}>{icon}</aside>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        {children}
      </div>
    </section>
  );
};

ESAlert.displayName = "ESAlert";

export default ESAlert;
