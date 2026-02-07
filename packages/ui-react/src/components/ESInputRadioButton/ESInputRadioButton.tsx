import * as React from "react";
import clsx from "clsx";
import { ESInputRadioButtonProps } from "./ESInputRadioButton.types";

/**
 * ESInputRadioButton Component
 *
 * @param {ESInputRadioButtonProps} props
 * @returns {React.ReactElement}
 */
const ESInputRadioButton: React.FC<ESInputRadioButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={clsx("es-input-radio", className)}>
      <input type="radio" {...props} />
    </div>
  );
};

ESInputRadioButton.displayName = "ESInputRadioButton";

export default ESInputRadioButton;
