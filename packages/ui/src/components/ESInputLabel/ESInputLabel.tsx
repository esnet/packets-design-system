import * as React from "react";
import styles from "./ESInputLabel.module.css";
import clsx from "clsx";
import { ESInputLabelProps } from "./ESInputLabel.types";

/**
 * ESInputLabel Component
 *
 * @param {ESInputLabelProps} props
 * @returns {React.ReactElement}
 */
const ESInputLabel: React.FC<ESInputLabelProps> = ({
  error,
  label,
  required,
  disabled,
  children,
  ...props
}) => {
  const errorText = React.useMemo(() => {
    if (typeof error === "boolean") {
      return "";
    }

    return error;
  }, [error]);

  return (
    <label {...props} aria-disabled={disabled} className={styles.ESInputLabel}>
      <span
        className={clsx(styles.ESInputLabelText, disabled && styles.disabled)}
      >
        {label}
        {required && (
          <span className={styles.ESInputLabelRequiredAsterisk}>*</span>
        )}
      </span>
      {children}
      {error && errorText && (
        <span className={styles.ESInputLabelError}>{errorText}</span>
      )}
    </label>
  );
};

ESInputLabel.displayName = "ESInputLabel";

export default ESInputLabel;
