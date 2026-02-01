import React from "react";
import styles from "./ESTooltip.module.css";
import { ESTooltipProps } from "./ESTooltip.types";
import { ESDropdown } from "../ESDropdown";
import ESIcon from "../ESIcon";

/**
 * ESTooltip Component
 *
 * Renders a popup with title (as prop) and text below (as children prop).
 *
 * Popup appears when an anchor, provided as a prop, is hovered.
 *
 * @param {ESTooltipProps} props
 * @returns {React.ReactElement}
 */
export function ESTooltip({
  children,
  title,
  anchor,
  onClickX,
  id,
}: ESTooltipProps) {
  const ariaId = "tooltip-" + (id ?? Math.random().toString(16).slice(4));
  return (
    <ESDropdown
      anchor={
        <div className={styles.anchor} aria-describedby={ariaId}>
          {anchor}
        </div>
      }
      caret
      className={styles.ESTooltip}
      mode="hover"
    >
      <div className={styles.tooltip} role="tooltip" id={ariaId}>
        <div className={styles.top}>
          {title && <span className={styles.title}>{title}</span>}
          {onClickX && (
            <ESIcon onClick={onClickX} className={styles.x} name="x" />
          )}
        </div>
        <div aria-describedby={id + "-tooltip"} className={styles.text}>
          {children}
        </div>
      </div>
    </ESDropdown>
  );
}

ESTooltip.displayName = "ESTooltip";

export default ESTooltip;
