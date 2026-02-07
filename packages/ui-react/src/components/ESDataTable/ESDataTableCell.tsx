import React, { FC } from "react";
import { ESDataTableCellProps } from "./ESDataTable.types";

/**
 * Data Table Cell Component
 *
 * Generic composable data table cell component
 *
 * @param {ESDataTableCellProps} props - React props
 * @returns {FC<ESDataTableCellProps>}
 */
const ESDataTableCell: FC<ESDataTableCellProps> = ({
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

ESDataTableCell.displayName = "ESDataTableCell";

export default ESDataTableCell;
