import React from "react";
import styles from "./ShadowDocBlock.module.scss";
import Datum from "../Datum/Datum";
import DatumList from "../DatumList/DatumList";

interface ShadowDocBlockProps {
  /** token name */
  name: string;
  /** token value */
  value: string;
}

const ShadowDocBlock: React.FC<ShadowDocBlockProps> = ({
  name = "",
  value = "",
}) => {
  return (
    <div
      className={styles.shadowDocBlock}
      style={{
        "--box-shadow": value,
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

export default ShadowDocBlock;
