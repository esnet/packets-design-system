import React from "react";
import { PktsButtonGroupProps } from "./PktsButtonGroup.types";
import clsx from "clsx";

/**
 * Button Group
 *
 * A compositional component that takes in one or more buttons and
 * regulates its layout across responsive screens.
 *
 * @param {PktsButtonGroupProps} props
 * @returns {React.FunctionComponent}
 */
const PktsButtonGroup = ({
  children,
  label,
  direction = "horizontal",
  ...other
}: PktsButtonGroupProps): JSX.Element => {
  return (
    <div className={clsx("pkts-button-group", `pkts-${direction}`)} {...other}>
      {label}
      <ul className="list">{children}</ul>
    </div>
  );
};

PktsButtonGroup.displayName = "PktsButtonGroup";

export default PktsButtonGroup;

// TODO: check if this works
