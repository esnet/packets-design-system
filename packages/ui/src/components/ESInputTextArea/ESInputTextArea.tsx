import React from "react";

import styles from "./ESInputTextArea.module.css";
import { ESInputTextAreaProps } from "./ESInputTextArea.types";
import { Text } from "lucide-react";
import clsx from "clsx";

/**
 * ESInputTextArea Component
 *
 * A wrapper around HTML <textarea> element to provide styling
 *
 * @param {ESInputTextAreaProps} props
 * @returns {React.ReactElement}
 */
const ESInputTextArea: React.FC<ESInputTextAreaProps> = ({
  variant = "primary",
  error = false,
  resize = "none",
  disabled,
  className,
  ...props
}) => {
  const classNames = clsx(
    styles.ESInputTextArea,
    variant && styles[variant],
    resize && styles[resize],
    error && styles.error,
    disabled && styles.disabled,
    className
  );

  return (
    <div className={classNames}>
      <textarea className={styles.textArea} {...props} disabled={disabled} />
      <Text className={styles.textIcon} />
    </div>
  );
};

ESInputTextArea.displayName = "ESInputTextArea";

export default ESInputTextArea;
