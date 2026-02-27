import React, { FC } from "react";
import { PktsDataTableCellProps } from "./PktsDataTable.types";

/**
 * Data Table Cell Component
 *
 * Generic composable data table cell component
 *
 * @param {ESDataTableCellProps} props - React props
 * @returns {FC<PktsDataTableCellProps>}
 */
const PktsDataTableCell: FC<PktsDataTableCellProps> = ({
  children,
  className,
  colSpan = 1,
  columnLabel = "",
  ...other
}) => {
  return (
    <td
      className={className || ""}
      colSpan={colSpan}
      data-parent={columnLabel}
      {...other}
    >
      {children}
    </td>
  );
};

PktsDataTableCell.displayName = "PktsDataTableCell";

export default PktsDataTableCell;
