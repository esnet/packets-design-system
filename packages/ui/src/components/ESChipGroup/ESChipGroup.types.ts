import * as React from "react";

export interface ESChipGroupProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /** ESChip components in the chip group. Any children that are not ESChip's are not rendered. */
  children: React.ReactNode;
}
