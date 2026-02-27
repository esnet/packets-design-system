import React from "react";
import clsx from "clsx";

import { PktsDividerProps } from "./PktsDivider.types";

/**
 * Divider - HTML <hr /> element.
 *
 * @param {PktsDividerProps} props
 * @returns {React.ReactElement}
 */
const PktsDivider: React.FC<PktsDividerProps> = ({
  variant = "primary",
  className,
}) => {
  return (
    <hr
      className={clsx(
        "pkts-divider",
        variant === "branded" && "pkts-branded",
        className,
      )}
    />
  );
};

PktsDivider.displayName = "PktsDivider";

export default PktsDivider;
