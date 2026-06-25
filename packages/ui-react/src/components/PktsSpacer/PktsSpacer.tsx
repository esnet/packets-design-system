import React, { FC, useMemo } from "react";
import clsx from "clsx";
import { PktsSpacerProps, getPktsSpacerSizesCSS } from "./PktsSpacer.types";

/**
 * PktsSpacer Component
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
    return getPktsSpacerSizesCSS(size);
  }, [size]);

  return (
    <div
      className={clsx("pkts-spacer", `pkts-${type}`, className)}
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
