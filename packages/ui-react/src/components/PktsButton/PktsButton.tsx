import * as React from "react";
import clsx from "clsx";
import { PktsButtonProps } from "./PktsButton.types";

/**
 * Button - An extension of a HTML button (or anchor, styled as a button)
 * that comes with different levels of action/intent.
 *
 * @param {PktsButtonProps} props
 * @returns {React.ReactElement}
 */
const PktsButton: React.FC<PktsButtonProps> = ({
  variant = "secondary",
  as = "button",
  className,
  prepend,
  append,
  children,
  ...props
}) => {
  const Tag = as as React.ElementType;
  return (
    <Tag
      className={clsx(
        "pkts-button",
        `pkts-${variant}`,
        className,
      )}
      {...(as === "button" && { type: "button" })}
      {...props}
    >
      {prepend}
      {children}
      {append}
    </Tag>
  );
};

PktsButton.displayName = "PktsButton";

export default PktsButton;
