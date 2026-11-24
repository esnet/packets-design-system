import * as React from "react";
import clsx from "clsx";
import { PktsInputCheckboxProps } from "./PktsInputCheckbox.types";

/**
 * ESInputCheckbox Component
 *
 * @param {PktsInputCheckboxProps} props
 * @returns {React.ReactElement}
 */
const PktsInputCheckbox: React.FC<PktsInputCheckboxProps> = ({
  variant = "default",
  className,
  ...props
}) => {
  return (
    <input
      {...props}
      type="checkbox"
      className={clsx(
        "pkts-input-checkbox",
        variant === "branded" && "pkts-branded",
        className,
      )}
    />
  );
};

PktsInputCheckbox.displayName = "PktsInputCheckbox";

export default PktsInputCheckbox;
