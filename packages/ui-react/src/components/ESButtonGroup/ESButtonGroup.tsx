import React from "react";
import { ESButtonGroupProps } from "./ESButtonGroup.types";

import clsx from "clsx";

/**
 * ES Button Group
 *
 * A compositional component that takes in one or more buttons and
 * regulates its layout across responsive screens.
 *
 * @param {ESButtonGroupProps} props
 * @returns {React.FunctionComponent}
 */
const ESButtonGroup = ({
  children,
  labelCopy,
  hideLabel,
  direction = "horizontal",
  ...other
}: ESButtonGroupProps): JSX.Element => {
  return (
    <section
      className={clsx("es-button-group", `es-${direction}`)}
      {...other}
    >
      {labelCopy && !hideLabel && <label>{labelCopy}</label>}
      <ul className="list">{children}</ul>
    </section>
  );
};

ESButtonGroup.displayName = "ESButtonGroup";

export default ESButtonGroup;
