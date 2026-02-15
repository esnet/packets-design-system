import * as React from "react";

export interface ESInputOptionProps
  extends React.ComponentPropsWithoutRef<"option"> {
  /** The value when this option is selected. When not included, the value defaults to children, the textual content of the option. */
  value?: string;
  /** Content to render as the option. Must be a string in order for the component to function properly. */
  children: string;
}
