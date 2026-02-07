import React, { FC } from "react";
import { ESDataTableCellProps } from "./ESDataTable.types";

import styles from "./ESDataTable.module.css";

/**
 * Data Table Head Component
 *
 * Generic composable data table head component
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
      className={`${styles.tableCell} ${className ? className : ""}`}
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
