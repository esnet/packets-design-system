import React from "react";
import styles from "./DurationDocBlock.module.scss";
import Datum from "../Datum/Datum";
import DatumList from "../DatumList/DatumList";

interface DurationDocBlockProps {
  /** token name */
  name: string;
  /** token value */
  duration: string;
}

const DurationDocBlock: React.FC<DurationDocBlockProps> = ({
  name = "",
  duration = "",
}) => {
  return (
    <div
      className={styles.durationDocBlock}
      style={{
        "--duration": `${duration}ms`,
      }}
    >
      <DatumList>
        <Datum name="token" value={name} />
        <Datum name="value" value={`${duration}ms`} />
        <Datum
          className={styles.previewAnimation}
          name="Hover for Preview"
          value={
            <div className={styles.preview}>
              <div className={styles.indicator} />
            </div>
          }
        />
      </DatumList>
    </div>
  );
};

export default DurationDocBlock;
