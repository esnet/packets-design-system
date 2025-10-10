import React from "react";
import clsx from "clsx";
import styles from "./ESTooltip.module.css";
import { ESTooltipProps } from "./ESTooltip.types";
import { ESDropdown, ESDropdownAnchor, ESDropdownContent } from "../ESDropdown";
import ESIcon from "../ESIcon";

/**
 * ESTooltip Component
 *
 * @param {ESTooltipProps} props
 * @returns {React.ReactElement}
 */
export function ESTooltip({ children, title, text, onClickX }: ESTooltipProps) {
  return (
    <ESDropdown carat className={styles.ESTooltip} mode="hover">
      <ESDropdownAnchor className={clsx(styles.anchor)}>
        {children}
      </ESDropdownAnchor>
      <ESDropdownContent className={styles.tooltip}>
        <div className={styles.top}>
          {title && <span className={styles.title}>{title}</span>}
          {onClickX && (
            <ESIcon onClick={onClickX} className={styles.x} name="x" />
          )}
        </div>
        <div className={styles.text}>{text}</div>
      </ESDropdownContent>
    </ESDropdown>
  );
}

ESTooltip.displayName = "ESTooltip";

export default ESTooltip;
