import * as React from "react";
import clsx from "clsx";
import { ESInputCheckboxProps } from "./ESInputCheckbox.types";

/**
 * ESInputCheckbox Component
 *
 * @param {ESInputCheckboxProps} props
 * @returns {React.ReactElement}
 */
const ESInputCheckbox: React.FC<ESInputCheckboxProps> = ({
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <div className={clsx("es-input-checkbox", variant === "branded" && "es-branded", className)}>
      <input
        {...props}
        type="checkbox"
      />
    </div>
  );
};

ESInputCheckbox.displayName = "ESInputCheckbox";

export default ESInputCheckbox;
