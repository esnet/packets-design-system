import React, { FC } from "react";

// @ts-ignore
import styles from "./ESSkeletonChip.module.css";
import { ESSkeletonChipProps } from "./ESSkeletonChip.types";

/**
 * ESSkeletonChip Component
 *
 * Visual representation of a Pill/Chip loading.
 *
 * @param {ESSkeletonChipProps} props
 * @returns {React.FunctionComponent}
 */
const ESSkeletonChip: FC<ESSkeletonChipProps> = ({ className }) => {
  return (
    <div role="alert" aria-busy="true" className={`${styles.skeletonChip} ${className ?? ""}`}></div>
  );
};

ESSkeletonChip.displayName = "ESSkeletonChip";

export default ESSkeletonChip;
