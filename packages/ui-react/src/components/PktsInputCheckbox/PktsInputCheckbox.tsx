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
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <div className={clsx("pkts-input-checkbox", variant === "branded" && "pkts-branded", className)}>
      <input
        {...props}
        type="checkbox"
      />
    </div>
  );
};

PktsInputCheckbox.displayName = "PktsInputCheckbox";

export default PktsInputCheckbox;
