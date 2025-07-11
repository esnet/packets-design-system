import React from "react";

// @ts-ignore
import styles from "./ESInputTextArea.module.css";
import { ESInputTextAreaProps } from "./ESInputTextArea.types";
import { Text } from "lucide-react";

/**
 * ESInputTextArea Component
 *
 * A wrapper around HTML <textarea> element to provide styling
 *
 * @param {ESInputTextAreaProps} props
 * @returns {React.ReactElement}
 */
const ESInputTextArea: React.FC<ESInputTextAreaProps> = ({
  variant = "default",
  error = false,
  resize = "none",
  disabled,
  className,
  ...props
}) => {
  const classNames = [
    styles.ESInputTextArea,
    styles[variant] ?? "",
    styles[resize] ?? "",
    error ? styles.error : "",
    disabled ? styles.disabled : "",
    className,
  ].join(" ");
  return (
    <div className={classNames}>
      <textarea
        className={styles.ESInputTextAreaTextArea}
        {...props}
        disabled={disabled}
      />
      <Text className={styles.ESInputTextAreaIcon} />
    </div>
  );
};

ESInputTextArea.displayName = "ESInputTextArea";

export default ESInputTextArea;
