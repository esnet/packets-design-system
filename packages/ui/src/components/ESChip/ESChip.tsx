import * as React from "react";
import clsx from "clsx";
import styles from "./ESChip.module.css";
import { ESChipProps } from "./ESChip.types";
import { X } from "lucide-react";

/**
 * ESChip Component
 *
 * @param {ESChipProps} props
 * @returns {React.ReactElement}
 */
const ESChip: React.FC<ESChipProps> = ({
  label,
  variant = "primary",
  className,
  rounded = true,
  prepend,
  append,
  onDelete,
  ...props
}) => {
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
      <span className={styles.label}>{label}</span>
      {append}
      {onDelete && <X className={styles.delete} />}
    </button>
  );
};

ESChip.displayName = "ESChip";

export default ESChip;
