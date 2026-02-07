import React, { FC } from "react";
import { ESDataTableProps } from "./ESDataTable.types";

import ESDataTableHead from "./ESDataTableHead";
import ESDataTableHeaderCell from "./ESDataTableHeaderCell";
import ESDataTableBody from "./ESDataTableBody";
import ESDataTableSortIcon from "./ESDataTableSortIcon";
import ESDataTableRow from "./ESDataTableRow";
import ESDataTableCell from "./ESDataTableCell";
import ESDataTableFooter from "./ESDataTableFooter";
import ESDataTableSkeletonLoading from "./ESDataTableSkeletonLoading";

/**
 * ESDataTable Component
 *
 * Generic composable data table component
 *
 * @param {ESDataTableProps} props
 * @returns {React.FunctionComponent}
 */
const ESDataTable: FC<ESDataTableProps> & {
  ESDataTableHead: typeof ESDataTableHead;
  ESDataTableHeaderCell: typeof ESDataTableHeaderCell;
  ESDataTableBody: typeof ESDataTableBody;
  ESDataTableSortIcon: typeof ESDataTableSortIcon;
  ESDataTableRow: typeof ESDataTableRow;
  ESDataTableCell: typeof ESDataTableCell;
  ESDataTableFooter: typeof ESDataTableFooter;
  ESDataTableSkeletonLoading: typeof ESDataTableSkeletonLoading;
} = ({ children, className, ...other }) => {
  return (
    <table className={`es-data-table ${className || ""}`} {...other}>
      {children}
    </table>
  );
};

ESDataTable.displayName = "ESDataTable";

ESDataTable.ESDataTableHead = ESDataTableHead;
ESDataTable.ESDataTableHeaderCell = ESDataTableHeaderCell;
ESDataTable.ESDataTableBody = ESDataTableBody;
ESDataTable.ESDataTableSortIcon = ESDataTableSortIcon;
ESDataTable.ESDataTableRow = ESDataTableRow;
ESDataTable.ESDataTableCell = ESDataTableCell;
ESDataTable.ESDataTableFooter = ESDataTableFooter;
ESDataTable.ESDataTableSkeletonLoading = ESDataTableSkeletonLoading;

export default ESDataTable;
