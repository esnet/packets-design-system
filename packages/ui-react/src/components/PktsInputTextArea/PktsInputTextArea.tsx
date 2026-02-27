import React from "react";

import { PktsInputTextAreaProps } from "./PktsInputTextArea.types";
import { Text } from "lucide-react";
import clsx from "clsx";

/**
 * PktsInputTextArea Component
 *
 * A wrapper around HTML <textarea> element to provide styling
 *
 * @param {PktsInputTextAreaProps} props
 * @returns {React.ReactElement}
 */
const PktsInputTextArea: React.FC<PktsInputTextAreaProps> = ({
  variant = "primary",
  error = false,
  resize = "none",
  disabled,
  className,
  ...props
}) => {
  const classNames = clsx(
    "pkts-input-text-area",
    variant === "branded" && "pkts-branded",
    resize && `pkts-${resize}`,
    error && "pkts-error",
    disabled && "pkts-disabled",
    className,
  );

  return (
    <div className={classNames}>
      <textarea {...props} disabled={disabled} />
      <Text />
    </div>
  );
};

PktsInputTextArea.displayName = "PktsInputTextArea";

export default PktsInputTextArea;
