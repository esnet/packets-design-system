import React, { FC, useMemo } from "react";
import clsx from "clsx";
import { PktsSpacerProps, getESSpacerSizesCSS } from "./PktsSpacer.types";

import styles from "./PktsSpacer.module.css";

/**
 * ESSpacer Component
 *
 * Spacer component adds a design tokens worth of spacing on a axis/type specified.
 * The distance of the spacing is regulated by the sizing token passed to it.
 *
 * @param {PktsSpacerProps} props
 * @returns {React.FunctionComponent}
 */
const PktsSpacer: FC<PktsSpacerProps> = ({
  type = "vertical",
  size = "none",
  className,
}) => {
  const sizeCSS = useMemo(() => {
    return getESSpacerSizesCSS(size);
  }, [size]);

  return (
    <div
      className={clsx(styles.PktsSpacer, styles[type], className)}
      style={
        {
          "--size": sizeCSS,
        } as React.CSSProperties
      }
    />
  );
};

PktsSpacer.displayName = "PktsSpacer";

export default PktsSpacer;
