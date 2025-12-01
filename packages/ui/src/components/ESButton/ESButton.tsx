import React from "react";
import clsx from "clsx";
import { ESButtonProps } from "./ESButton.types";

import styles from "./ESButton.module.css";

/**
 * ESButton - An extension of HTML button (or anchor, styled as a button)
 * that comes with different levels of action/intent.
 *
 * @param {ESButtonProps} props
 * @returns {React.ReactElement}
 */
const ESButton: React.FC<ESButtonProps> = ({
  variant = "primary",
  as = "button",
  className,
  prepend,
  append,
  children,
  ref,
  ...props
}) => {
  const Tag = as;
  return (
    <Tag
      // @ts-ignore -- ref typing issue with discriminated unions
      ref={ref}
      className={clsx(styles.ESButton, styles[variant], className)}
      {...props}
    >
      {prepend}
      <span className={styles.label}>{children}</span>
      {append}
    </Tag>
  );
};

ESButton.displayName = "ESButton";

export default ESButton;
