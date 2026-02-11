import * as React from "react";
import clsx from "clsx";
import { PktsInputRadioButtonProps } from "./PktsInputRadioButton.types";

/**
 * ESInputRadioButton Component
 *
 * @param {ESInputRadioButtonProps} props
 * @returns {React.ReactElement}
 */
const PktsInputRadioButton: React.FC<PktsInputRadioButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={clsx("pkts-input-radio", className)}>
      <input type="radio" {...props} />
    </div>
  );
};

PktsInputRadioButton.displayName = "PktsInputRadioButton";

export default PktsInputRadioButton;
