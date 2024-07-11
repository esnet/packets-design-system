import { FC } from "react";
import { ESModuleProps } from "./ESModule.types";

// @ts-ignore
import styles from "./ESModule.module.css";

/**
 * ESModule Component
 *
 * A name value pair visualization
 *
 * @param {ESModuleProps} props
 * @returns {React.FunctionComponent} - Icon Component
 */
const ESModule: FC<ESModuleProps> = ({
  className,
  surface = false,
  title,
  children,
  ...other
}) => {
  const allClassNames = `${className || ""} ${styles.esModule} ${surface ? "surface" : ""}`;

  return (
    <section className={allClassNames} {...other}>
      {title && <h6 className={styles.title}>{title}</h6>}
      {children}
    </section>
  );
};

ESModule.displayName = "ESModule";

export default ESModule;
