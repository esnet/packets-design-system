import React, { FC } from "react";

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
    <div role="alert" aria-busy="true" className="pkts-skeleton-chip"></div>
  );
};

PktsSkeletonChip.displayName = "PktsSkeletonChip";

export default PktsSkeletonChip;
