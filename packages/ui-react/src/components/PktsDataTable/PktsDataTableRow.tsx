import React, { FC } from "react";
import { PktsDataTableRowProps } from "./PktsDataTable.types";

/**
 * Data Table Row Component
 *
 * Generic composable data table row component
 *
 * @param {ESDataTableRowProps} props - React props
 * @returns {FC<PktsDataTableRowProps>}
 */
const PktsDataTableRow: FC<PktsDataTableRowProps> = ({
  children,
  className,
  ...other
}) => {
  return (
    <tr className={className || ""} {...other}>
      {children}
    </tr>
  );
};

PktsDataTableRow.displayName = "PktsDataTableRow";

export default PktsDataTableRow;
