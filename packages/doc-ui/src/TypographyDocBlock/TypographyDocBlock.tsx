import React from "react";
import styles from "./TypographyDocBlock.module.scss";
import Datum from "../Datum/Datum";
import DatumList from "../DatumList/DatumList";

interface TypographyDocBlockProps {
  /** token name */
  name: string;
  /** token value */
  value: any;
}

const TypographyDocBlock: React.FC<TypographyDocBlockProps> = ({
  name = "",
  value = {},
}) => {
  return (
    <div
      className={styles.typographyDocBlock}
      style={{
        "--font": value,
      }}
    >
      <DatumList>
        <Datum name="token" value={name} />
        <Datum name="value" value={`${JSON.stringify(value, null, 2)}`} />
        <Datum
          className={styles.previewAnimation}
          name="Preview"
          value={
            <div className={styles.previewblock}>
              Packets: The Design System
            </div>
          }
        />
      </DatumList>
    </div>
  );
};

export default TypographyDocBlock;
