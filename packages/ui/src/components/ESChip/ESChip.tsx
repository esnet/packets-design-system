import * as React from "react";
import clsx from "clsx";
import styles from "./ESChip.module.css";
import { ESChipProps } from "./ESChip.types";
import ESIcon from "../ESIcon";

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
  const _onClick = React.useMemo(
    () => onDelete || props.onClick || undefined,
    [onDelete, props.onClick]
  );
  return (
    <button
      {...props}
      className={clsx(
        styles.ESChip,
        rounded && styles.rounded,
        styles[variant],
        prepend && styles.prependStyle,
        (append || onDelete) && styles.appendStyle,
        className
      )}
      onClick={_onClick}
    >
      {prepend}
      <span className={styles.label}>{children}</span>
      {append}
      {onDelete && <ESIcon name="x" className={styles.delete} />}
    </button>
  );
}

ESChip.displayName = "ESChip";

export default ESChip;
