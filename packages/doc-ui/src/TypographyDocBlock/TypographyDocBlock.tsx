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
  console.log("value?.fontFamily", value?.fontFamily);
  let font = "Arial";
  if (value?.fontFamily) {
    font =
      value.fontFamily === "Roboto"
        ? "var(--font-roboto-flex)"
        : "var(--font-open-sans)";
  }

  return (
    <div
      className={styles.typographyDocBlock}
      style={{
        "--fontFamily": font,
        "--fontWeight": value?.fontWeight || "500",
        "--fontSize": value?.fontSize || "16px",
        "--letterSpacing": value?.letterSpacing || "0px",
        "--lineHeight": value?.lineHeight || "1.4em",
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
              ESNet: The Energy Science Network
            </div>
          }
        />
      </DatumList>
    </div>
  );
};

export default TypographyDocBlock;
