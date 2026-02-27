import React, { FC } from "react";

import styles from "./PktsSkeletonChip.module.css";

/**
 * ESSkeletonChip Component
 *
 * Visual representation of a Pill/Chip loading.
 *
 * @param {ESSkeletonChipProps} props
 * @returns {React.ReactElement}
 */
const PktsSkeletonChip: FC = () => {
  return (
    <div role="alert" aria-busy="true" className={styles.PktsSkeletonChip}></div>
  );
};

PktsSkeletonChip.displayName = "PktsSkeletonChip";

export default PktsSkeletonChip;
