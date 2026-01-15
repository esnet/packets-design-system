import * as React from "react";

export interface ESTooltipProps {
  /** Title of the tooltip, bolded and separated. */
  title?: string;
  /** Anchor node for the tooltip, which acts as the trigger for the tooltip. */
  anchor?: React.ReactNode;
  /** Tooltip contents. */
  children?: React.ReactNode;
  /** When provided, provides an X icon and attaches this as a onClick callback. */
  onClickX?: () => void;
}
