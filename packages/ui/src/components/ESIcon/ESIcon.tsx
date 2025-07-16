import React, { lazy, Suspense, useMemo } from "react";
import { FileQuestion } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { ESIconProps } from "./ESIcon.types";
import styles from "./ESIcon.module.css";

/**
 *
 * ESIcon component that dynamically imports Lucide icons based on the provided name.
 * It's recommended to use this component rather than importing icons from lucide for consistency.
 * Name must be a valid icon name.
 *
 *
 * @param props {ESIconProps}
 * @returns {React.ReactElement}
 */
const ESIcon = ({ name, ...props }: ESIconProps) => {
  // see https://www.npmjs.com/package/lucide-react/v/0.372.0 README "With Dynamic Imports"
  const LucideIcon = lazy(dynamicIconImports[name]);

  const fallback = useMemo(() => <FileQuestion />, []);

  return (
    <Suspense fallback={fallback}>
      <LucideIcon className={styles.ESIcon} {...props} />
    </Suspense>
  );
};

ESIcon.displayName = "ESIcon";

export default ESIcon;
