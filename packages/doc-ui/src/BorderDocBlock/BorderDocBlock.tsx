import React from "react";
import styles from "./BorderDocBlock.module.scss";
import Datum from "../Datum/Datum";
import DatumList from "../DatumList/DatumList";

interface BorderDocBlockProps {
  /** token name */
  name: string;
  /** token value */
  value: string;
}

const BorderDocBlock: React.FC<BorderDocBlockProps> = ({
  name = "",
  value = "",
}) => {
  return (
    <div
      className={styles.borderDocBlock}
      style={{
        "--border-border": value,
      }}
    >
      <DatumList>
        <Datum name="token" value={name} />
        <Datum name="value" value={value} />
        <Datum
          className={styles.previewAnimation}
          name="Preview"
          value={<div className={styles.previewblock} />}
        />
      </DatumList>
    </div>
  );
};

export default BorderDocBlock;
