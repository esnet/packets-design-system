import React, { useMemo } from "react";
import { ESTabsProps } from "./ESTabs.types";
import styles from "./ESTabs.module.css";
import ESTab from "./ESTab";
import clsx from "clsx";

/**
 * ESTabs Component
 *
 * Composable component that manages the layout of a list of tabs.
 *
 * @param {ESTabsProps} props
 * @returns {React.ReactNode}
 */
export function ESTabs({
  children,
  border,
  branded,
  fullWidth,
  ...props
}: ESTabsProps) {
  const tabChildren = useMemo(() => {
    return React.Children.toArray(children).filter(
      (child) => (child as React.ReactElement).type !== ESTab.displayName
    );
  }, [children]);

  return (
    <nav
      className={clsx(
        styles.ESTabs,
        branded && styles.branded,
        border && styles.border,
        fullWidth && styles.fullWidth,
        props.className
      )}
      {...props}
    >
      <ul className={styles.tabList}>{tabChildren}</ul>
    </nav>
  );
}

ESTabs.displayName = "ESTabs";

export default ESTabs;
