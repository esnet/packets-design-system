import React from "react";
import { ESButtonGroupProps } from "./ESButtonGroup.types";
import styles from "./ESButtonGroup.module.css";
import clsx from "clsx";

/**
 * ESButtonGroup
 *
 * A compositional component that takes in one or more buttons (use ESButton) and
 * regulates its layout across responsive screens.
 *
 * @param {ESButtonGroupProps} props
 * @returns {React.ReactNode}
 */
const ESButtonGroup: React.FC<ESButtonGroupProps> = ({
  children,
  label,
  direction = "horizontal",
  ...props
}) => {
  return (
    <div {...props} className={clsx(styles.ESButtonGroup, styles[direction])}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.buttons}>{children}</div>
    </div>
  );
};

ESButtonGroup.displayName = "ESButtonGroup";

export default ESButtonGroup;
