import * as React from "react";
import clsx from "clsx";
import styles from "./ESChipGroup.module.css";
import { ESChipGroupProps } from "./ESChipGroup.types";

/**
 * ESChipGroup Component
 *
 * Children should be ESChip components.
 *
 * @param {ESChipGroupProps} props
 * @returns {React.ReactElement}
 */
const ESChipGroup: React.FC<ESChipGroupProps> = ({ className, children }) => {
  return <div className={clsx(styles.ESChipGroup, className)}>{children}</div>;
};

ESChipGroup.displayName = "ESChipGroup";

export default ESChipGroup;
