import * as React from "react";
import clsx from "clsx";
import styles from "./ESInputCheckbox.module.css";
import { ESInputCheckboxProps } from "./ESInputCheckbox.types";

/**
 * ESInputCheckbox Component
 *
 * @param {ESInputCheckboxProps} props
 * @returns {React.ReactElement}
 */
const ESInputCheckbox: React.FC<ESInputCheckboxProps> = ({
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <div className={clsx(styles.ESInputCheckbox, styles[variant], className)}>
      <input
        {...props}
        type="checkbox"
        className={styles.ESInputCheckboxInput}
      />
    </div>
  );
};

ESInputCheckbox.displayName = "ESInputCheckbox";

export default ESInputCheckbox;
