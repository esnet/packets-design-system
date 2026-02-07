import React from "react";
import clsx from "clsx";
import { ESButtonDefaultAsType, ESButtonProps } from "./ESButton.types";

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
        "es-button",
        `es-${variant}`,
        fill ? "es-fill" : "es-nofill",
        size && `es-${size}`,
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
