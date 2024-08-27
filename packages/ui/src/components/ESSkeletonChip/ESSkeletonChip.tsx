import React, { FC } from "react";

// @ts-ignore
import styles from "./ESSkeletonChip.module.css";

/**
 * ESSkeletonChip Component
 *
 * Visual representation of a Pill/Chip loading.
 *
 * @param {ESSkeletonChipProps} props
 * @returns {React.FunctionComponent}
 */
const ESSkeletonChip: FC = () => {
  return (
    <div role="alert" aria-busy="true" className={styles.skeletonChip}></div>
  );
};

ESSkeletonChip.displayName = "ESSkeletonChip";

export default ESSkeletonChip;
