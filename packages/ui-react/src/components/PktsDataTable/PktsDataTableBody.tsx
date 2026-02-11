import React, { FC } from "react";
import { PktsDataTableBodyProps } from "./PktsDataTable.types";

/**
 * Data Table Body Component
 *
 * Generic composable data table body component
 *
 * @param {ESDataTableBodyProps} props - React props
 * @returns {FC<PktsDataTableBodyProps>}
 */
const PktsDataTableBody: FC<PktsDataTableBodyProps> = ({
  children,
  className,
  ...other
}) => {
  return (
    <tbody className={className || ""} {...other}>
      {children}
    </tbody>
  );
};

PktsDataTableBody.displayName = "PktsDataTableBody";

export default PktsDataTableBody;
