import * as React from "react";
import clsx from "clsx";
import { PktsLabelProps } from "./PktsLabel.types";

/**
 * ESLabel Component
 *
 * @param {PktsLabelProps} props
 * @returns {React.ReactElement}
 */
const PktsLabel: React.FC<PktsLabelProps> = ({
  error,
  label,
  required,
  disabled,
  children,
  ...props
}) => {
  const errorText = React.useMemo(() => {
    if (typeof error === "boolean") {
      return "Error";
    }

    return error;
  }, [error]);

  return (
    <label {...props} aria-disabled={disabled} className="pkts-label">
      <span className={clsx("pkts-label-text", disabled && "pkts-disabled")}>
        {label}
        {required && <span className="pkts-label-required">*</span>}
      </span>
      {children}
      {error && errorText && <span className="pkts-label-error">{errorText}</span>}
    </label>
  );
};

PktsLabel.displayName = "PktsLabel";

export default PktsLabel;
