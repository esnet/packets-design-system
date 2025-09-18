import * as React from "react";
import clsx from "clsx";
import styles from "./ESChipGroup.module.css";
import { ESChipGroupProps } from "./ESChipGroup.types";
import ESChip from "../ESChip/ESChip";

/**
 * ESChipGroup Component
 *
 * Composable component that is a container of ESChip components.
 * If a child is not a chip component, it is not rendered.
 *
 * @param {ESChipGroupProps} props
 * @returns {React.ReactNode}
 */
const ESChipGroup: React.FC<ESChipGroupProps> = ({ className, children }) => {
  const chipChildren = React.useMemo(() => {
    return React.Children.toArray(children).filter(
      (child) => (child as React.ReactElement).type !== ESChip.displayName
    );
  }, [children]);
  return (
    <div className={clsx(styles.ESChipGroup, className)}>{chipChildren}</div>
  );
};

ESChipGroup.displayName = "ESChipGroup";

export default ESChipGroup;
