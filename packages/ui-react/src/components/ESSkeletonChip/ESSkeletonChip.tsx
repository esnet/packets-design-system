import React, { FC } from "react";

import styles from "./ESSkeletonChip.module.css";

/**
 * ESSkeletonChip Component
 *
 * Visual representation of a Pill/Chip loading.
 *
 * @param {ESSkeletonChipProps} props
 * @returns {React.ReactElement}
 */
const ESSkeletonChip: FC = () => {
  return (
    <div role="alert" aria-busy="true" className={styles.ESSkeletonChip}></div>
  );
};

ESSkeletonChip.displayName = "ESSkeletonChip";

export default ESSkeletonChip;
