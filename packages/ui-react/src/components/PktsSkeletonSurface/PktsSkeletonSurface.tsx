import React, { CSSProperties, FC } from "react";

import { PktsSkeletonSurfaceProps } from "./PktsSkeletonSurfaceProps";

/**
 * PktsSkeletonSurface Component
 *
 * Visual representation of a Pill/Chip loading.
 *
 * @param {PktsSkeletonSurfaceProps} props
 * @returns {React.FunctionComponent}
 */
const PktsSkeletonSurface: FC<PktsSkeletonSurfaceProps> = ({
  isSquare = false,
  className = "",
  strokeSize = "var(--pkts-size-border-width-medium, 3px)",
  strokeRadius = "var(--pkts-size-spacing-large, 2rem)",
  height = "var(--pkts-size-touchtarget-min, 2rem)",
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
      className={`pkts-skeleton-surface ${isSquare ? "" : "pkts-rounded"} ${className}`}
      style={inlineStyles}
    ></div>
  );
};

PktsSkeletonSurface.displayName = "PktsSkeletonSurface";

export default PktsSkeletonSurface;
