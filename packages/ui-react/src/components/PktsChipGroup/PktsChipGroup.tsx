import * as React from "react";
import clsx from "clsx";
import { PktsChipGroupProps } from "./PktsChipGroup.types";
import PktsChip from "../PktsChip/PktsChip";

/**
 * ESChipGroup Component
 *
 * Composable component that is a container of ESChip components.
 * If a child is not a chip component, it is not rendered.
 *
 * @param {PktsChipGroupProps} props
 * @returns {React.ReactElement}
 */
export function PktsChipGroup({ className, children }: PktsChipGroupProps) {
  const chipChildren = React.useMemo(() => {
    return React.Children.toArray(children).filter(
      (child) => (child as React.ReactElement).type === PktsChip,
    );
  }, [children]);
  return (
    <div className={clsx("pkts-chip-group", className)}>{chipChildren}</div>
  );
}

PktsChipGroup.displayName = "PktsChipGroup";

export default PktsChipGroup;
