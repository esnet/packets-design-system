import React from "react";
import clsx from "clsx";
import { PktsButtonDefaultAsType, PktsButtonProps } from "./PktsButton.types";

// TODO: ensure this still works
/**
 * Button - An extension of a HTML button that comes with different levels of action/intent.
 *
 * @param {PktsButtonProps} props
 * @returns {React.FunctionComponent}
 */
const PktsButton = <E extends React.ElementType = PktsButtonDefaultAsType>({
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
}: PktsButtonProps<E>): JSX.Element => {
  const Tag = as || PktsButtonDefaultAsType;

  return (
    <Tag
      className={clsx(
        "pkts-button",
        `pkts-${variant}`,
        fill ? "pkts-fill" : "pkts-nofill",
        size && `pkts-${size}`,
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

PktsButton.displayName = "PktsButton";

export default PktsButton;

// TODO: convert this to use discriminated union and React.FC
// see previous commits
