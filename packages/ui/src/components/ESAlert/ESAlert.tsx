import React, { FC, useMemo } from "react";
import { ESAlertProps } from "./ESAlert.types";
import { getAlertIconByType } from "./ESAlertUtils";

import styles from "./ESAlert.module.css";
import { clsx } from "clsx";

/**
 * ESAlert Component
 *
 * Display message with alert level styling
 *
 * @param {ESAlertProps} props
 * @returns {React.FunctionComponent}
 */
const ESAlert: FC<ESAlertProps> = ({ title, type = "info", children }) => {
  const icon = useMemo(() => {
    return getAlertIconByType(type);
  }, [type]);

  return (
    <section className={clsx(styles.ESAlert, styles[type])}>
      <aside className={styles.icon}>{icon}</aside>
      <section className={styles.content}>
        <h6 className={styles.title}>{title}</h6>
        {children}
      </section>
    </section>
  );
};

ESAlert.displayName = "ESAlert";

export default ESAlert;
