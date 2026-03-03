import React from "react";
import clsx from "clsx";
import { PktsIconButtonProps } from "./PktsIconButton.types";

/**
 * Packets Icon Button
 *
 * Generic Icon only button component.
 * Can be a link or a button set with the "As" prop.
 *
 * Child should be a lucide-icon, nothing else.
 *
 * @param {PktsIconButtonProps} props
 * @returns {React.FunctionComponent}
 */
const PktsIconButton = ({
  variant = "secondary",
  className,
  children = "",
  square = false,
  ...props
}: PktsIconButtonProps) {
  return (
    <button
      className={clsx(
        "pkts-icon-button",
        `pkts-${variant}`,
        square && "pkts-square",
        className,
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

PktsIconButton.displayName = "PktsIconButton";

export default PktsIconButton;

// TODO: ensure As prop works... ensure whole thing works
