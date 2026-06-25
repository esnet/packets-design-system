import React, { ComponentPropsWithoutRef } from "react";

export interface PktsAccordionProps extends Omit<
  ComponentPropsWithoutRef<"div">,
  "children"
> {
  /** State variable to open the accordion. */
  open?: boolean;
  /** Title string to be shown at the top of the accordion */
  header?: React.ReactNode;
  /** Footer text. If set to a false-y value, no footer will appear at all. If set to true, a footer will appear but have no text. */
  footer?: boolean | React.ReactNode;
  /** Content to be shown in accordion when open */
  children?: React.ReactNode;
  /** Variant. Inline variant has no background color, no padding, disables footer, and should be used in text. */
  variant?: "primary" | "inline";
  /** Icon buttons shown on the right of the header to perform various actions.
   * Use a single PktsIcon component with an onClick handler for one, and an array for multiple. */
  actionButtons?: React.ReactElement | React.ReactElement[];
}
