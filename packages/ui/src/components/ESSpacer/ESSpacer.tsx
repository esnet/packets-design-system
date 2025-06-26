import React, { FC, useMemo } from "react";
import { ESSpacerProps, getESSpacerSizesCSS } from "./ESSpacer.types";

import styles from "./ESSpacer.module.css";

/**
 * ESSpacer Component
 *
 * Spacer component adds a design tokens worth of spacing on a axis/type specified.
 * The distance of the spacing is regulated by the sizing token passed to it.
 *
 * @param {ESSpacerProps} props
 * @returns {React.FunctionComponent}
 */
const ESSpacer: FC<ESSpacerProps> = ({
  type = "vertical",
  size = "none",
  className,
}) => {
  const sizeCSS = useMemo(() => {
    return getESSpacerSizesCSS(size);
  }, [size]);

  return (
    <div
      className={`${styles.spacer} ${styles[type]} ${className || ""}`}
      style={
        {
          "--size": sizeCSS,
        } as React.CSSProperties
      }
    />
  );
};

ESSpacer.displayName = "ESSpacer";

export default ESSpacer;
