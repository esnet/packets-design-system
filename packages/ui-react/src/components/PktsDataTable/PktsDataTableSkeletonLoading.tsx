import React, { FC } from "react";
import { PktsDataTableSkeletonLoadingProps } from "./PktsDataTable.types";

import PktsDataTableCell from "./PktsDataTableCell";
import PktsDataTableRow from "./PktsDataTableRow";
import PktsSkeletonSurface from "../PktsSkeletonSurface";

/**
 * Data Table Head Component
 *
 * Generic composable data table head component
 *
 * @param {ESDataTableSkeletonLoadingProps} props - React props
 * @returns {FC<PktsDataTableSkeletonLoadingProps>}
 */
const PktsDataTableSkeletonLoading: FC<PktsDataTableSkeletonLoadingProps> = ({
  className,
  rowCount = 2,
  columnCount = 1,
}) => {
  let rows = [];

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    let cells = [];
    for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
      cells.push(
        <PktsDataTableCell key={`skeley-bones-cell-${columnIndex}`}>
          <PktsSkeletonSurface />
        </PktsDataTableCell>,
      );
    }
    rows.push(
      <PktsDataTableRow
        key={`skeley-bones-row-${rowIndex}`}
        className={className}
      >
        {cells}
      </PktsDataTableRow>,
    );
  }

  return <>{rows}</>;
};

PktsDataTableSkeletonLoading.displayName = "PktsDataTableSkeletonLoading";

export default PktsDataTableSkeletonLoading;
