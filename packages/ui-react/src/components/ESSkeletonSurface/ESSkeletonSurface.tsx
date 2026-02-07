import React, { CSSProperties, FC } from "react";

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
  className = "",
  strokeSize = "var(--esnet-size-border-width-medium, 3px)",
  strokeRadius = "var(--esnet-size-spacing-large, 2rem)",
  height = "var(--esnet-size-touchtarget-min, 2rem)",
}) => {
  const inlineStyles = {
    "--stroke-size": strokeSize,
    "--stroke-radius": strokeRadius,
    "--height": height,
  } as CSSProperties;

  return (
    <div
      role="alert"
      aria-busy="true"
      className={`${styles.skeletonSurface} ${isSquare ? "" : styles.rounded} ${className}`}
      style={inlineStyles}
    ></div>
  );
};

ESSkeletonSurface.displayName = "ESSkeletonSurface";

export default ESSkeletonSurface;
