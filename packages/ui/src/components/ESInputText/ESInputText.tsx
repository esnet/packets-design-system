import React from "react";

import styles from "./ESInputText.module.css";
import { ESInputTextProps } from "./ESInputText.types";
import clsx from "clsx";

/**
 * ESInputText Component
 *
 * A wrapper around HTML <input type="text" /> element to provide styling
 *
 * @param {ESInputTextProps} props
 * @returns {React.ReactElement}
 */
const ESInputText: React.FC<ESInputTextProps> = ({
  variant = "default",
  error = false,
  disabled = false,
  className,
  actionButtons,
  ...props
}) => {
  const classNames = clsx(
    styles.ESInputText,
    variant && styles[variant],
    error && styles.error,
    disabled && styles.disabled,
    className
  );

  return (
    <div className={classNames}>
      <input
        className={styles.ESInputTextInput}
        type="text"
        disabled={disabled}
        {...props}
      />
      {actionButtons && (
        <div className={styles.ESInputTextActionButtons}>{actionButtons}</div>
      )}
    </div>
  );
};

ESInputText.displayName = "ESInputText";

export default ESInputText;
