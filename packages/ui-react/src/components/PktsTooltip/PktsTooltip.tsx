import React from "react";
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
        <div className="pkts-tooltip-anchor" aria-describedby={ariaId}>
          {anchor}
        </div>
      }
      caret
      className="pkts-tooltip"
      mode="hover"
    >
      <div className="pkts-tooltip-popup" role="tooltip" id={ariaId}>
        <div className="pkts-tooltip-top">
          {title && <span className="pkts-tooltip-title">{title}</span>}
          {onClickX && <X onClick={onClickX} className="pkts-tooltip-close" />}
        </div>
        <div aria-describedby={id + "-tooltip"} className="pkts-tooltip-text">
          {children}
        </div>
      </div>
    </PktsDropdown>
  );
}

PktsTooltip.displayName = "ESTooltip";

export default PktsTooltip;
