import * as React from "react";
import { ESAlertProps } from "./ESAlert.types";

import styles from "./ESAlert.module.css";
import { clsx } from "clsx";
import {
  TriangleAlertIcon,
  CircleCheckIcon,
  CircleAlertIcon,
  InfoIcon,
  CircleX,
} from "lucide-react";

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
    switch (variant) {
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
  }, [variant]);

  return (
    <section className={clsx(styles.ESAlert, styles[variant])}>
      <aside className={styles.icon}>{icon}</aside>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        {children}
      </div>
      <aside className={styles.icon}>
        <button className={styles.closeButton} onClick={onClickClose}>
          <CircleX />
        </button>
      </aside>
    </section>
  );
};

ESAlert.displayName = "ESAlert";

export default ESAlert;
