import React from "react";
import { ESInputTextProps } from "./ESInputText.types";
import clsx from "clsx";

/**
 * ESInputText Component
 *
 * A wrapper around HTML `<input type="text" />` element to provide styling. If the case applies, use any of the other ESInput components instead.
 *
 */
export function ESInputText({
  variant = "primary",
  error = false,
  disabled = false,
  className,
  actionButtons,
  ...props
}: ESInputTextProps) {
  return (
    <div
      className={clsx(
        "es-input-text",
        variant === "branded" && "es-branded",
        error && "es-error",
        disabled && "es-disabled",
        className,
      )}
    >
      <input {...props} disabled={disabled} />
      {actionButtons && <div className="action-buttons">{actionButtons}</div>}
    </div>
  );
}

ESInputText.displayName = "ESInputText";

export default ESInputText;
