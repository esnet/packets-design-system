import React from "react";
import clsx from "clsx";
import styles from "./ESTooltip.module.css";
import { ESTooltipProps } from "./ESTooltip.types";
import { ESDropdown, ESDropdownAnchor, ESDropdownContent } from "../ESDropdown";

/**
 * ESTooltip Component
 *
 * @param {ESTooltipProps} props
 * @returns {React.ReactElement}
 */
export function ESTooltip({ className, children, title }: ESTooltipProps) {
  return (
    <ESDropdown carat className={styles.ESTooltip}>
      <ESDropdownAnchor>{children}</ESDropdownAnchor>
      <ESDropdownContent className={styles.tooltip}>{title}</ESDropdownContent>
    </ESDropdown>
  );
}

ESTooltip.displayName = "ESTooltip";

export default ESTooltip;
