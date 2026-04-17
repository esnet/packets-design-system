import React from "react";
import clsx from "clsx";
import { PktsInputOptionProps } from "./PktsInputOption.types";
import { Check, Square } from "lucide-react";

/**
 * Input Option Component, meant to mirror HTML's `<option>` tag.
 *
 * Meant for use as a subcomponent of PktsInputSelect and PktsInputTypeahead, with undefined behavior outside of them.
 * PktsInputOption's child MUST be a string.
 *
 *
 * PktsInputOption mimics the impossible to style `<option>` tag, utilizing `button` under the hood,
 * but functions as an `<option>` otherwise.
 * As such, view the attributes for `<option>` (here)[https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option].
 *
 * @param {PktsInputOptionProps} props
 * @returns {React.ReactElement}
 */
export function PktsInputOption({
  value,
  children,
  selected,
  disabled,
  className,
  onClick,
}: PktsInputOptionProps) {
  return (
    <button
      className={clsx(
        "pkts-input-option",
        disabled && "pkts-disabled",
        selected && "pkts-selected",
        className,
      )}
      type="button"
      role="option"
      aria-selected={selected}
      value={value ?? (children as string)}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e as any);
      }}
    >
      {selected ? <Check /> : <Square />}
      <span className="pkts-input-option-label">{children}</span>
    </button>
  );
}

PktsInputOption.displayName = "PktsInputOption";

export default PktsInputOption;
