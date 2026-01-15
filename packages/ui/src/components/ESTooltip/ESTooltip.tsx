import React from "react";
import styles from "./ESTooltip.module.css";
import { ESTooltipProps } from "./ESTooltip.types";
import { ESDropdown } from "../ESDropdown";
import ESIcon from "../ESIcon";

/**
 * ESTooltip Component
 *
 * @param {ESTooltipProps} props
 * @returns {React.ReactElement}
 */
export function ESTooltip({
  children,
  title,
  anchor,
  onClickX,
}: ESTooltipProps) {
  return (
    <ESDropdown
      anchor={<div className={styles.anchor}>{anchor}</div>}
      caret
      className={styles.ESTooltip}
      mode="hover"
    >
      <div className={styles.tooltip}>
        <div className={styles.top}>
          {title && <span className={styles.title}>{title}</span>}
          {onClickX && (
            <ESIcon onClick={onClickX} className={styles.x} name="x" />
          )}
        </div>
        <div className={styles.text}>{children}</div>
      </div>
    </ESDropdown>
  );
}

ESTooltip.displayName = "ESTooltip";

export default ESTooltip;
