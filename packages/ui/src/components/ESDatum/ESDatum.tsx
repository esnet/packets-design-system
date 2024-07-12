import { FC } from "react";
import { ESDatumProps } from "./ESDatum.types";

// @ts-ignore
import styles from "./ESDatum.module.css";

/**
 * ESDatum Component
 *
 * A name value pair visualization
 *
 * @param {ESDatumProps} props
 * @returns {React.FunctionComponent}
 */
const ESDatum: FC<ESDatumProps> = ({ title = "", children }) => {
  return (
    <div className={styles.datum}>
      <label className={styles.label}>{title}</label>
      <span className={styles.value}>{children}</span>
    </div>
  );
};

ESDatum.displayName = "ESDatum";

export default ESDatum;
