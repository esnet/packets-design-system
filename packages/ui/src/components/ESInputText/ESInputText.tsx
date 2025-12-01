import React from "react";
import styles from "./ESInputText.module.css";
import { ESInputTextProps } from "./ESInputText.types";
import clsx from "clsx";

/**
 * ESInputText Component
 *
 * A wrapper around HTML `<input type="text" />` element to provide styling. If the case applies, use any of the other ESInput components instead.
 *
 */
export function ESInputText({
  variant = "primary",
  error = false,
  disabled = false,
  className,
  actionButtons,
  ...props
}: ESInputTextProps) {
  return (
    <div
      className={clsx(
        styles.ESInputText,
        variant && styles[variant],
        error && styles.error,
        disabled && styles.disabled,
        className
      )}
    >
      <input {...props} className={styles.input} disabled={disabled} />
      {actionButtons && (
        <div className={styles.actionButtons}>{actionButtons}</div>
      )}
    </div>
  );
}

ESInputText.displayName = "ESInputText";

export default ESInputText;
