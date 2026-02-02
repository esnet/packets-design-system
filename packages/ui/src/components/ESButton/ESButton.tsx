import React from "react";
import clsx from "clsx";
import { ESButtonDefaultAsType, ESButtonProps } from "./ESButton.types";

import styles from "./ESButton.module.css";

/**
 * Button - An extension of a HTML button that comes with different levels of action/intent.
 *
 * @param {ESButtonProps} props
 * @returns {React.FunctionComponent}
 */
const ESButton = <E extends React.ElementType = ESButtonDefaultAsType>({
  variant = "secondary",
  children = "",
  fill = true,
  disabled = false,
  prepend = null,
  size = "medium",
  as,
  className,
  append = null,
  ...other
}: ESButtonProps<E>): JSX.Element => {
  const Tag = as || ESButtonDefaultAsType;

  return (
    <Tag
      className={clsx(
        styles.ESButton,
        styles[variant],
        fill && styles.fill,
        size && styles[size],
        className,
      )}
      type="button"
      disabled={disabled}
      {...other}
    >
      <>{prepend}</>
      {children}
      <>{append}</>
    </Tag>
  );
};

ESButton.displayName = "ESButton";

export default ESButton;
