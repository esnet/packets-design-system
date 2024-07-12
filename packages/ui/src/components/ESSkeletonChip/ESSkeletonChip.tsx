import { FC } from "react";

// @ts-ignore
import styles from "./ESSkeletonChip.module.css";

/**
 * ESSkeletonChip Component
 *
 * A name value pair visualization
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
