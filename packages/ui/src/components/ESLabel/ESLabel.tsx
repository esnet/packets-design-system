import * as React from "react";
import styles from "./ESLabel.module.css";
import clsx from "clsx";
import { ESLabelProps } from "./ESLabel.types";

/**
 * ESLabel Component
 *
 * @param {ESLabelProps} props
 * @returns {React.ReactElement}
 */
const ESLabel: React.FC<ESLabelProps> = ({
  error,
  label,
  required,
  disabled,
  children,
  ...props
}) => {
  const errorText = React.useMemo(() => {
    if (typeof error === "boolean") {
      return "Error";
    }

    return error;
  }, [error]);

  return (
    <label {...props} aria-disabled={disabled} className={styles.ESLabel}>
      <span className={clsx(styles.text, disabled && styles.disabled)}>
        {label}
        {required && <span className={styles.requiredAsterisk}>*</span>}
      </span>
      {children}
      {error && errorText && <span className={styles.error}>{errorText}</span>}
    </label>
  );
};

ESLabel.displayName = "ESLabel";

export default ESLabel;
