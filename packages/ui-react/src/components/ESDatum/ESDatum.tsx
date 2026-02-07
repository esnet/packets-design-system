import React, { FC } from "react";
import { ESDatumProps } from "./ESDatum.types";

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
    <div className="es-datum">
      <label>{title}</label>
      <span>{children}</span>
    </div>
  );
};

ESDatum.displayName = "ESDatum";

export default ESDatum;
