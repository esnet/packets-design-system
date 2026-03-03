import * as React from "react";

export interface PktsChipGroupProps {
  className?: string;
  /** PktsChip components in the chip group. Any children that are not PktsChip's are not rendered. */
  children: React.ReactNode;
}
