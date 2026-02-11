import React from "react";
import clsx from "clsx";
import { PktsIconButtonProps } from "./PktsIconButton.types";

/**
 * ES Icon Button
 *
 * Generic Icon only button component.
 * Can be a link or a button set with the "As" prop
 *
 * @param {PktsIconButtonProps} props
 * @returns {React.FunctionComponent}
 */
const PktsIconButton = ({
  variant = "secondary",
  className,
  children = "",
  disabled = false,
  square = false,
  ...other
}: PktsIconButtonProps): JSX.Element => {
  return (
    <button
      className={clsx(
        "pkts-icon-button",
        `pkts-${variant}`,
        square && "pkts-square",
        className,
      )}
      type="button"
      disabled={disabled}
      {...other}
    >
      {children}
    </button>
  );
};

PktsIconButton.displayName = "PktsIconButton";

export default PktsIconButton;
