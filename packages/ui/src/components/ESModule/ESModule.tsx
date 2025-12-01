import * as React from "react";
import clsx from "clsx";
import { ESModuleProps } from "./ESModule.types";

import styles from "./ESModule.module.css";

/**
 * ESModule Component
 *
 * A generic section component that can optionally add a surface.
 *
 * @param {ESModuleProps} props
 * @returns {React.ReactElement}
 */
const ESModule: React.FC<ESModuleProps> = ({
  className,
  surface = false,
  title,
  children,
  ...props
}) => {
  return (
    <section
      className={clsx(className, styles.ESModule, surface && "surface")}
      {...props}
    >
      {title && <h6 className={styles.title}>{title}</h6>}
      {children}
    </section>
  );
};

ESModule.displayName = "ESModule";

export default ESModule;
