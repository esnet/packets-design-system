import React from "react";
import styles from "./SpacingDocBlock.module.scss";
import Datum from "../Datum/Datum";
import DatumList from "../DatumList/DatumList";

interface SpacingDocBlockProps {
  /** token name */
  name: string;
  /** token value */
  value: string;
}

const SpacingDocBlock: React.FC<SpacingDocBlockProps> = ({
  name = "",
  value = "",
}) => {
  return (
    <div
      className={styles.spacingDocBlock}
      style={{
        "--spacing-preview": value,
      }}
    >
      <DatumList columnCount={4}>
        <Datum name="token" value={name} />
        <Datum name="value" value={value} />
        <Datum
          name="Horizontal Preview"
          value={<div className={styles.previewblock} />}
        />
        <Datum
          name="Vertical Preview"
          value={<div className={styles.previewVerticalblock} />}
        />
      </DatumList>
    </div>
  );
};

export default SpacingDocBlock;
