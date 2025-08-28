import React, { FC } from "react";
import clsx from "clsx";
import { ESModuleProps } from "./ESModule.types";

import styles from "./ESModule.module.css";

/**
 * ESModule Component
 *
 * A generic section component that can optionally add a surface.
 *
 * @param {ESModuleProps} props
 * @returns {React.FunctionComponent}
 */
const ESModule: FC<ESModuleProps> = ({
  className,
  surface = false,
  title,
  children,
  ...other
}) => {
  return (
    <section
      className={clsx(className, styles.ESModule, surface && "surface")}
      {...other}
    >
      {title && <h6 className={styles.title}>{title}</h6>}
      {children}
    </section>
  );
};

ESModule.displayName = "ESModule";

export default ESModule;
