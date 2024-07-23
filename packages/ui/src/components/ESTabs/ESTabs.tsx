import React, { FC, useMemo } from "react";
import { ESTabsProps } from "./ESTabs.types";

// @ts-ignore
import styles from "./ESTabs.module.css";
import ESTab from "./ESTab";

/**
 * ESTabs Component
 *
 * Composable component that manages the layout of a list of tabs.
 *
 * @param {ESTabsProps} props
 * @returns {React.FunctionComponent}
 */
const ESTabs: FC<ESTabsProps> = ({
  children,
  className = "",
  border = false,
  verticalPadding = true,
}) => {
  const tabChildren = useMemo(() => {
    return React.Children.toArray(children).filter(
      (child) => (child as React.ReactElement).type !== ESTab.displayName,
    );
  }, [children]);

  return (
    <section
      className={`${styles.tabs} ${border ? styles.hasBorder : ""} ${
        verticalPadding ? styles.verticalPadding : ""
      } ${className}`}
    >
      <ul className={styles.tabList}>{tabChildren}</ul>
    </section>
  );
};

ESTabs.displayName = "ESTabs";

export default ESTabs;
