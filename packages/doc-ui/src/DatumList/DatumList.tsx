import React from "react";
import styles from "./DatumList.module.scss";

interface DatumListProps {
  children: Node | React.ReactNode | [React.ReactNode];
  columnCount?: number;
}

const DatumList: React.FC<DatumListProps> = ({ columnCount = 3, children }) => {
  return (
    <section
      className={styles.datumList}
      style={{
        "--column-count": columnCount,
      }}
    >
      {children}
    </section>
  );
};

export default DatumList;
