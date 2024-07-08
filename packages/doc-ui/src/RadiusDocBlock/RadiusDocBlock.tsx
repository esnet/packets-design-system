import React from "react";
import styles from "./RadiusDocBlock.module.scss";
import Datum from "../Datum/Datum";
import DatumList from "../DatumList/DatumList";

interface RadiusDocBlockProps {
  /** token name */
  name: string;
  /** token value */
  value: string;
}

const RadiusDocBlock: React.FC<RadiusDocBlockProps> = ({
  name = "",
  value = "",
}) => {
  return (
    <div
      className={styles.radiusDocBlock}
      style={{
        "--border-radius-preview": value,
      }}
    >
      <DatumList>
        <Datum name="token" value={name} />
        <Datum name="value" value={value} />
        <Datum name="Preview" value={<div className={styles.previewblock} />} />
      </DatumList>
    </div>
  );
};

export default RadiusDocBlock;
