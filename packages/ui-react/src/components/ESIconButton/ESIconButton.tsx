import React from "react";
import clsx from "clsx";
import { ESIconButtonProps } from "./ESIconButton.types";

/**
 * ES Icon Button
 *
 * Generic Icon only button component.
 * Can be a link or a button set with the "As" prop
 *
 * @param {ESIconButtonProps} props
 * @returns {React.FunctionComponent}
 */
const ESIconButton = ({
  variant = "secondary",
  className,
  children = "",
  disabled = false,
  square = false,
  ...other
}: ESIconButtonProps): JSX.Element => {
  return (
    <button
      className={clsx(
        "es-icon-button",
        `es-${variant}`,
        square && "es-square",
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

ESIconButton.displayName = "ESIconButton";

export default ESIconButton;
