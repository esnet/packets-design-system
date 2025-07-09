import React, { ComponentPropsWithRef, FC, ReactNode } from "react";

// @ts-ignore
import styles from "./ESInputText.module.css";
// import { ESInputTextProps } from "./ESInputText.types";

export interface ESInputTextProps extends ComponentPropsWithRef<"input"> {
  /** variant */
  variant?: "default" | "branded";
  /** error state */
  error?: boolean;
  actionButtons?: ReactNode[];
}

/**
 * ESInputText Component
 *
 * A wrapper around HTML `<input type="text" />` element to provide styling
 *
 *
 * @param {ESInputTextProps} props
 * @returns {React.ReactElement}
 */
export const ESInputText: FC<ESInputTextProps> = ({
  variant = "default",
  error = false,
  disabled,
  className,
  actionButtons,
  ...props
}: ESInputTextProps) => {
  return (
    <div
      className={`${styles.ESInputText} ${styles[variant]} ${error ? styles.error : ""} ${disabled ? styles.disabled : ""} ${className}`}
    >
      <input type="text" disabled={disabled} {...props} />
      <div>{actionButtons}</div>
    </div>
  );
};

ESInputText.displayName = "ESInputText";
