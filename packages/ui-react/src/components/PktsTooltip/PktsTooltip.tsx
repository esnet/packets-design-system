import React from "react";
import styles from "./PktsTooltip.module.css";
import { PktsTooltipProps } from "./PktsTooltip.types";
import PktsDropdown from "../PktsDropdown";
import { X } from "lucide-react";

/**
 * PktsTooltip Component
 *
 * On anchor hover, renders a popup with title (as prop) and text below (as children prop).
 *
 * Popup appears when an anchor, provided as a prop, is hovered.
 *
 * @param {PktsTooltipProps} props
 * @returns {React.ReactElement}
 */
export function PktsTooltip({
  children,
  title,
  anchor,
  onClickX,
  id,
}: PktsTooltipProps) {
  const ariaId = "tooltip-" + (id ?? Math.random().toString(16).slice(4));
  return (
    <PktsDropdown
      anchor={
        <div className={styles.anchor} aria-describedby={ariaId}>
          {anchor}
        </div>
      }
      caret
      className={styles.PktsTooltip}
      mode="hover"
    >
      <div className={styles.tooltip} role="tooltip" id={ariaId}>
        <div className={styles.top}>
          {title && <span className={styles.title}>{title}</span>}
          {onClickX && <X onClick={onClickX} className={styles.x} />}
        </div>
        <div aria-describedby={id + "-tooltip"} className={styles.text}>
          {children}
        </div>
      </div>
    </PktsDropdown>
  );
}

PktsTooltip.displayName = "ESTooltip";

export default PktsTooltip;
