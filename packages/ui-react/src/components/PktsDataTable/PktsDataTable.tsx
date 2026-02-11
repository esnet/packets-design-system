import React, { FC } from "react";
import { PktsDataTableProps } from "./PktsDataTable.types";

import PktsDataTableHead from "./PktsDataTableHead";
import PktsDataTableHeaderCell from "./PktsDataTableHeaderCell";
import PktsDataTableBody from "./PktsDataTableBody";
import PktsDataTableSortIcon from "./PktsDataTableSortIcon";
import PktsDataTableRow from "./PktsDataTableRow";
import PktsDataTableCell from "./PktsDataTableCell";
import PktsDataTableFooter from "./PktsDataTableFooter";
import PktsDataTableSkeletonLoading from "./PktsDataTableSkeletonLoading";

/**
 * ESDataTable Component
 *
 * Generic composable data table component
 *
 * @param {PktsDataTableProps} props
 * @returns {React.FunctionComponent}
 */
const PktsDataTable: FC<PktsDataTableProps> & {
  PktsDataTableHead: typeof PktsDataTableHead;
  PktsDataTableHeaderCell: typeof PktsDataTableHeaderCell;
  PktsDataTableBody: typeof PktsDataTableBody;
  PktsDataTableSortIcon: typeof PktsDataTableSortIcon;
  PktsDataTableRow: typeof PktsDataTableRow;
  PktsDataTableCell: typeof PktsDataTableCell;
  PktsDataTableFooter: typeof PktsDataTableFooter;
  PktsDataTableSkeletonLoading: typeof PktsDataTableSkeletonLoading;
} = ({ children, className, ...other }) => {
  return (
    <table className={`pkts-data-table ${className || ""}`} {...other}>
      {children}
    </table>
  );
};

PktsDataTable.displayName = "PktsDataTable";

PktsDataTable.PktsDataTableHead = PktsDataTableHead;
PktsDataTable.PktsDataTableHeaderCell = PktsDataTableHeaderCell;
PktsDataTable.PktsDataTableBody = PktsDataTableBody;
PktsDataTable.PktsDataTableSortIcon = PktsDataTableSortIcon;
PktsDataTable.PktsDataTableRow = PktsDataTableRow;
PktsDataTable.PktsDataTableCell = PktsDataTableCell;
PktsDataTable.PktsDataTableFooter = PktsDataTableFooter;
PktsDataTable.PktsDataTableSkeletonLoading = PktsDataTableSkeletonLoading;

export default PktsDataTable;
