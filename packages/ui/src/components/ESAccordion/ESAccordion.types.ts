/* eslint-disable no-unused-vars */
import React from "react";

export interface ESAccordionProps {
  /** Controllable state variable to open the accordion.  */
  open?: boolean;
  /** Callback to when the carat is opened/closed. */
  onChange?: (next: boolean) => void;
  /** Title string to be shown at the top of the accordion */
  title: string;
  /** Footer text. If set to a false-y value, no footer will appear at all. If set to true, a footer will appear but have no text. */
  footer?: string | boolean;
  /** Content to be shown in accordion when open */
  children: React.ReactNode;
  /** Variant. Inline variant has no background color, no padding, and can be should be used in text. */
  variant?: "primary" | "inline";
  /** Icon buttons shown on the right of the header to perform various actions.
   * Use a single ESIcon component with an onClick handler for one, and an array for multiple. */
  actionButtons?: React.ReactNode;
}
