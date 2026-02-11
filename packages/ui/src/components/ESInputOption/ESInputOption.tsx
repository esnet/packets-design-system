import React from "react";
import clsx from "clsx";
import styles from "./ESInputOption.module.css";
import { ESInputOptionProps } from "./ESInputOption.types";
import { Check, Square } from "lucide-react";

/**
 * ESInputOption Component
 *
 * Meant for use as a subcomponent of ESInputSelect and ESInputTypeahead, with undefined behavior outside of them.
 *
 *
 * ESInputOption mimics the impossible to style `<option>` tag, utilizing `button` under the hood,
 * but functions as an `<option>` otherwise.
 * As such, view the attributes for `<option>` (here)[https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option].
 *
 * @param {ESInputOptionProps} props
 * @returns {React.ReactElement}
 */
export function ESInputOption({
  value,
  children,
  selected,
  disabled,
  className,
  onClick,
}: ESInputOptionProps) {
  return (
    <button
      className={clsx(
        styles.ESInputOption,
        disabled && styles.disabled,
        selected && styles.selected,
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
      <span className={styles.label}>{children}</span>
    </button>
  );
}

ESInputOption.displayName = "ESInputOption";

export default ESInputOption;
