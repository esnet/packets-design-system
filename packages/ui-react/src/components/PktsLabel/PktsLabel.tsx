import * as React from "react";
import styles from "./PktsLabel.module.css";
import clsx from "clsx";
import { PktsLabelProps } from "./PktsLabel.types";

/**
 * ESLabel Component
 *
 * @param {PktsLabelProps} props
 * @returns {React.ReactElement}
 */
const PktsLabel: React.FC<PktsLabelProps> = ({
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
    <label {...props} aria-disabled={disabled} className={styles.PktsLabel}>
      <span className={clsx(styles.text, disabled && styles.disabled)}>
        {label}
        {required && <span className={styles.requiredAsterisk}>*</span>}
      </span>
      {children}
      {error && errorText && <span className={styles.error}>{errorText}</span>}
    </label>
  );
};

PktsLabel.displayName = "PktsLabel";

export default PktsLabel;
