import React from "react";
import clsx from "clsx";

import { ESDividerProps } from "./ESDivider.types";

/**
 * Divider - HTML <hr /> element.
 *
 * @param {ESDividerProps} props
 * @returns {React.ReactElement}
 */
const ESDivider: React.FC<ESDividerProps> = ({
  variant = "primary",
  className,
}) => {
  return (
    <hr
      className={clsx(
        "es-divider",
        variant === "branded" && "es-branded",
        className,
      )}
    />
  );
};

ESDivider.displayName = "ESDivider";

export default ESDivider;
