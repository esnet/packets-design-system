import * as React from "react";
import clsx from "clsx";
import { ESChipProps } from "./ESChip.types";
import { X } from "lucide-react";

/**
 * ESChip Component, built on top of an HTML button element with hover and focus stylings.
 * ESChip can have an optional onClick handler, but is not required to be interactive.
 * If an onDelete handler is provided, an X icon will be appended to the right of the label text, and the onDelete handler will be used as the click handler for the chip as a whole.
 *
 * @param {ESChipProps} props
 * @returns {React.ReactElement}
 */
export function ESChip({
  variant = "primary",
  rounded = true,
  prepend,
  append,
  onDelete,
  children,
  className,
  ...props
}: ESChipProps) {
  return (
    <button
      {...props}
      className={clsx(
        "es-chip",
        rounded && "es-rounded",
        variant === "outline" && "es-outline",
        prepend && "es-prepend",
        (append || onDelete) && "es-append",
        className,
      )}
      type="button"
      onClick={onDelete || props.onClick}
    >
      {prepend}
      <span>{children}</span>
      {append}
      {onDelete && <X className="delete-icon" />}
    </button>
  );
}

ESChip.displayName = "ESChip";

export default ESChip;
