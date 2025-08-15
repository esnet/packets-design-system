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
  labelPlacement = "top",
  ...props
}) => {
  const errorText = React.useMemo(() => {
    if (typeof error === "boolean") {
      return "Error";
    }

    return error;
  }, [error]);

  return (
    <div className={styles.ESLabel}>
      <label
        {...props}
        aria-disabled={disabled}
        className={clsx(styles.label, {
          [styles.labelPlacementTop]: labelPlacement === "top",
          [styles.labelPlacementLeft]: labelPlacement === "left",
          [styles.labelPlacementRight]: labelPlacement === "right",
          [styles.labelPlacementBottom]: labelPlacement === "bottom",
        })}
      >
        <span className={clsx(styles.text, disabled && styles.disabled)}>
          {label}
          {required && <span className={styles.requiredAsterisk}>*</span>}
        </span>
        {children}
      </label>
      {error && errorText && <span className={styles.error}>{errorText}</span>}
    </div>
  );
};

ESLabel.displayName = "ESLabel";

export default ESLabel;
