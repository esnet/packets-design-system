import * as React from "react";

export interface PktsChipGroupProps {
  className?: string;
  /** ESChip components in the chip group. Any children that are not ESChip's are not rendered. */
  children: React.ReactNode;
}
