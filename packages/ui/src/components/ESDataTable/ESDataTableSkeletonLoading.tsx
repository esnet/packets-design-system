import React, { FC } from "react";
import { ESDataTableSkeletonLoadingProps } from "./ESDataTable.types";


import ESDataTableCell from "./ESDataTableCell";
import ESDataTableRow from "./ESDataTableRow";
import ESSkeletonSurface from "../ESSkeletonSurface";

/**
 * Data Table Head Component
 *
 * Generic composable data table head component
 *
 * @param {ESDataTableSkeletonLoadingProps} props - React props
 * @returns {FC<ESDataTableSkeletonLoadingProps>}
 */
const ESDataTableSkeletonLoading: FC<ESDataTableSkeletonLoadingProps> = ({
  className,
  rowCount = 2,
  columnCount = 1,
}) => {
  let rows = [];

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    let cells = [];
    for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
      cells.push(
        <ESDataTableCell key={`skeley-bones-cell-${columnIndex}`}>
          <ESSkeletonSurface />
        </ESDataTableCell>,
      );
    }
    rows.push(
      <ESDataTableRow
        key={`skeley-bones-row-${rowIndex}`}
        className={className}
      >
        {cells}
      </ESDataTableRow>,
    );
  }

  return <>{rows}</>;
};

ESDataTableSkeletonLoading.displayName = "ESDataTableSkeletonLoading";

export default ESDataTableSkeletonLoading;
