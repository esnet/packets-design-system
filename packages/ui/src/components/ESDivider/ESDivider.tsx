import React from "react";

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
  variant = "primary",
  className = "",
}) => {
  return (
    <hr
      className={`${styles.ESDivider} ${styles[variant]} ${className ? className : ""}`}
    />
  );
};

ESDivider.displayName = "ESDivider";

export default ESDivider;
