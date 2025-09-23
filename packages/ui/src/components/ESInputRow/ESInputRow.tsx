import * as React from "react";
import styles from "./ESInputRow.module.css";
import clsx from "clsx";
import { ESInputRowProps } from "./ESInputRow.types";
import ESIcon from "../ESIcon";

/**
 * ESInputRow component, a composable input label with extended functionality for error/success caption, tooltips, and layout.
 * ESInputRow's label wraps around the input element, linking them automatically.
 *
 * It's recommended to wrap all inputs with ESInputRow, and to give all inputs a name.
 *
 * @param {ESInputRowProps} props
 * @returns {React.ReactElement}
 */
export function ESInputRow({
  label,
  children,
  error = false,
  success = false,
  required = false,
  disabled = false,
  tooltip,
  ...props
}: ESInputRowProps) {
  const caption = React.useMemo(() => {
    if (error) {
      let errorText = error;
      if (typeof error === "boolean") {
        errorText = "Error";
      }
      return (
        <span className={clsx(styles.caption, styles.error)}>{errorText}</span>
      );
    }

    if (success) {
      let successText = success;
      if (typeof success === "boolean") {
        successText = "Success";
      }
      return (
        <span className={clsx(styles.caption, styles.success)}>
          {successText}
        </span>
      );
    }

    return (
      <span className={clsx(styles.caption, styles.hidden)}>Placeholder</span>
    );
  }, [error, success]);

  return (
    <label {...props} className={styles.ESLabel}>
      <span
        className={clsx(styles.text, disabled && styles.disabled)}
        title={tooltip}
      >
        {label}
        {required && <span className={styles.requiredAsterisk}>*</span>}
        {tooltip && (
          // TODO: Replace with actual ESTooltip when created
          <div style={{ display: "contents" }}>
            <ESIcon
              className={styles.tooltipIcon}
              name="circle-question-mark"
            />
          </div>
        )}
      </span>
      {children}
      {caption}
    </label>
  );
}

ESInputRow.displayName = "ESInputRow";

export default ESInputRow;
