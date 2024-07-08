import React from "react";
import styles from "./Datum.module.scss";

interface DatumProps {
  /** token name */
  name: string;
  /** token value */
  value: string | React.ReactNode;
  className?: string;
}

const Datum: React.FC<DatumProps> = ({ name = "", value = "" }) => {
  return (
    <div className={styles.datum}>
      <label className={styles.label}>{name}</label>
      <span className={styles.value}>{value}</span>
    </div>
  );
};

export default Datum;
