import React, { FC } from "react";
import { PktsDatumProps } from "./PktsDatum.types";

/**
 * ESDatum Component
 *
 * A name value pair visualization
 *
 * @param {PktsDatumProps} props
 * @returns {React.FunctionComponent}
 */
const PktsDatum: FC<PktsDatumProps> = ({ title = "", children }) => {
  return (
    <div className="pkts-datum">
      <label>{title}</label>
      <span>{children}</span>
    </div>
  );
};

PktsDatum.displayName = "PktsDatum";

export default PktsDatum;
