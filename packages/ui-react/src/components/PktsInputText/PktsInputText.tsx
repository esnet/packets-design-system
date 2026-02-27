import React from "react";
import { PktsInputTextProps } from "./PktsInputText.types";
import clsx from "clsx";

/**
 * ESInputText Component
 *
 * A wrapper around HTML `<input type="text" />` element to provide styling. If the case applies, use any of the other ESInput components instead.
 *
 */
export function PktsInputText({
  variant = "primary",
  error = false,
  disabled = false,
  className,
  actionButtons,
  ...props
}: PktsInputTextProps) {
  return (
    <div
      className={clsx(
        "pkts-input-text",
        variant === "branded" && "pkts-branded",
        error && "pkts-error",
        disabled && "pkts-disabled",
        className,
      )}
    >
      <input {...props} disabled={disabled} />
      {actionButtons && <div className="action-buttons">{actionButtons}</div>}
    </div>
  );
}

PktsInputText.displayName = "PktsInputText";

export default PktsInputText;
