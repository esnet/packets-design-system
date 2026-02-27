import * as React from "react";
import clsx from "clsx";
import { PktsChipProps } from "./PktsChip.types";
import { X } from "lucide-react";

/**
 * ESChip Component, built on top of an HTML button element with hover and focus stylings.
 * ESChip can have an optional onClick handler, but is not required to be interactive.
 * If an onDelete handler is provided, an X icon will be appended to the right of the label text, and the onDelete handler will be used as the click handler for the chip as a whole.
 *
 * @param {PktsChipProps} props
 * @returns {React.ReactElement}
 */
export function PktsChip({
  variant = "primary",
  rounded = true,
  prepend,
  append,
  onDelete,
  children,
  className,
  ...props
}: PktsChipProps) {
  return (
    <button
      {...props}
      className={clsx(
        "pkts-chip",
        rounded && "pkts-rounded",
        variant === "outline" && "pkts-outline",
        prepend && "pkts-prepend",
        (append || onDelete) && "pkts-append",
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

PktsChip.displayName = "PktsChip";

export default PktsChip;
