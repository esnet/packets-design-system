import React, { FC } from "react";

import { ESSkeletonSurfaceProps } from "./ESSkeletonSurfaceProps";

// @ts-ignore
import styles from "./ESSkeletonSurface.module.css";

/**
 * ESSkeletonSurface Component
 *
 * Visual representation of a Pill/Chip loading.
 *
 * @param {ESSkeletonSurfaceProps} props
 * @returns {React.FunctionComponent}
 */
const ESSkeletonSurface: FC<ESSkeletonSurfaceProps> = ({
  isSquare = false,
}) => {
  return (
    <div
      role="alert"
      aria-busy="true"
      className={`${styles.skeletonSurface} ${isSquare ? "" : styles.rounded}`}
    ></div>
  );
};

ESSkeletonSurface.displayName = "ESSkeletonSurface";

export default ESSkeletonSurface;
