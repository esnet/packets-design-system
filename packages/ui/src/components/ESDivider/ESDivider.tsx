import React from "react";
import clsx from "clsx";

// @ts-ignore
import styles from "./ESDivider.module.css";
import { ESDividerProps } from "./ESDivider.types";

/**
 * Divider - HTML <hr /> element.
 *
 * @param {ESDividerProps} props
 * @returns {React.ReactElement}
 */
const ESDivider: React.FC<ESDividerProps> = ({
  variant = "default",
  className,
}) => {
  return <hr className={clsx(styles.ESDivider, styles[variant], className)} />;
};

ESDivider.displayName = "ESDivider";

export default ESDivider;
