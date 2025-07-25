import React from "react";

// @ts-ignore
import styles from "./ESInputText.module.css";
import { ESInputTextProps } from "./ESInputText.types";

/**
 * ESInputText Component
 *
 * A wrapper around HTML <input type="text" /> element to provide styling
 *
 * @param {ESInputTextProps} props
 * @returns {React.ReactElement}
 */
const ESInputText: React.FC<ESInputTextProps> = ({
  variant = "primary",
  error = false,
  disabled = false,
  className,
  actionButtons,
  ...props
}) => {
  return (
    <div
      className={`${styles.ESInputText} ${styles[variant] ?? ""} ${error ? styles.error : ""} ${disabled ? styles.disabled : ""} ${className ?? ""}`}
    >
      <input type="text" disabled={disabled} {...props} />
      <div>{actionButtons}</div>
    </div>
  );
};

ESInputText.displayName = "ESInputText";

export default ESInputText;
