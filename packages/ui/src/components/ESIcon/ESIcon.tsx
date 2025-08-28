import React from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import { ESIconProps } from "./ESIcon.types";
import styles from "./ESIcon.module.css";

/**
 *
 * ESIcon component that dynamically imports Lucide icons based on the provided name.
 *
 *
 * @param props {ESIconProps}
 * @returns {React.ReactElement}
 */
const ESIcon = ({ name, className, ...props }: ESIconProps) => {
  return <DynamicIcon {...props} name={name} className={styles.ESIcon} />;
};

ESIcon.displayName = "ESIcon";

export default ESIcon;
