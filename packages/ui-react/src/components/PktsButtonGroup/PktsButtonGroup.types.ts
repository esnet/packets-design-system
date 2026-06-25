import { ComponentPropsWithoutRef } from "react";

export interface PktsButtonGroupProps
  extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  /** Optional label to be shown at the top of the button group. */
  label?: React.ReactNode;
  /** Direction of buttons, defaulting to horizontal. When horizontal, if media goes below 640px, it is styled vertically regardless. */
  direction?: "vertical" | "horizontal";
}
