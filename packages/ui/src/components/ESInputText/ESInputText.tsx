import React from "react";

// @ts-ignore
import styles from "./ESInputText.module.css";
import { ESInputTextProps } from "./ESInputText.types";

/**
 * ESInputText Component
 *
 * @param {ESInputTextProps} props
 * @returns {React.ReactElement}
 */
const ESInputText: React.FC<ESInputTextProps> = ({
  id,
  className = "",
  placeholder = "",
  variant = "default",
  disabled = false,
  error = false,
  label,
  initialValue,
  ariaLabel,
  onChange,
  onBlur,
  onFocus,
}) => {
  return (
    <input
      className={`${styles.inputText} ${styles[variant]} ${error ? styles.error : ""} ${className}`}
      placeholder={placeholder}
      disabled={disabled}
      type="text"
    />
  );
};

ESInputText.displayName = "ESInputText";

export default ESInputText;
