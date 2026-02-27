import React from "react";
import { PktsButtonGroupProps } from "./PktsButtonGroup.types";

import clsx from "clsx";

/**
 * ES Button Group
 *
 * A compositional component that takes in one or more buttons and
 * regulates its layout across responsive screens.
 *
 * @param {PktsButtonGroupProps} props
 * @returns {React.FunctionComponent}
 */
const PktsButtonGroup = ({
  children,
  labelCopy,
  hideLabel,
  direction = "horizontal",
  ...other
}: PktsButtonGroupProps): JSX.Element => {
  return (
    <section
      className={clsx("pkts-button-group", `pkts-${direction}`)}
      {...other}
    >
      {labelCopy && !hideLabel && <label>{labelCopy}</label>}
      <ul className="list">{children}</ul>
    </section>
  );
};

PktsButtonGroup.displayName = "PktsButtonGroup";

export default PktsButtonGroup;
