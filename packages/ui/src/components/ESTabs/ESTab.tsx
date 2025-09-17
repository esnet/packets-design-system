import React from "react";
import { ESTabProps } from "./ESTabs.types";

import styles from "./ESTabs.module.css";
import clsx from "clsx";

/**
 * ESTab Component
 *
 * To be used to compose the ESTabs component.
 *
 * @param {ESTabsProps} props
 * @returns {React.FunctionComponent}
 */
export function ESTab({ children, onTabSelect, active = false }: ESTabProps) {
  return (
    <li className={styles.tabWrapper}>
      <button
        className={clsx(styles.ESTab, active && styles.active)}
        onClick={onTabSelect}
      >
        {children}
      </button>
    </li>
  );
}

ESTab.displayName = "ESTab";

export default ESTab;
