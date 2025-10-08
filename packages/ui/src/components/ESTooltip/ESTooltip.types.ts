import * as React from "react";

export interface ESTooltipProps {
  title?: string;
  text?: React.ReactNode;
  /** Anchor node for the tooltip. When hovered, tooltip text is shown. */
  children?: React.ReactNode;
}
