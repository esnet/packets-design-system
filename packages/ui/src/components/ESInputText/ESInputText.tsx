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
  variant = "default",
  error = false,
  className,
  ...props
}) => {
  return (
    <input
      className={`${styles.inputText} ${styles[variant]} ${error ? styles.error : ""} ${className}`}
      type="text"
      {...props}
    />
  );
};

ESInputText.displayName = "ESInputText";

export default ESInputText;
