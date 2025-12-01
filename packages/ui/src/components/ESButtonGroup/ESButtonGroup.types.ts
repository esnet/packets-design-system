import * as React from "react";

export interface ESButtonGroupProps
  extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  /** Optional label to be shown at the top of the button group. */
  label?: string;
  /** Direction of buttons, defaulting to horizontal. When horizontal, if media goes below 640px, it is styled vertically regardless. */
  direction?: "vertical" | "horizontal";
}
