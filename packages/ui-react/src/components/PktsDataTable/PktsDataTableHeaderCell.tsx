import React, { FC } from "react";
import { PktsDataTableHeaderCellProps } from "./PktsDataTable.types";

import PktsDataTableSortIcon from "./PktsDataTableSortIcon";

/**
 * Data Table Header Cell Component
 *
 * Generic composable data table header cell component
 *
 * @param {ESDataTableHeaderCellProps} props - React props
 * @returns {FC<PktsDataTableHeaderCellProps>}
 */
const PktsDataTableHeaderCell: FC<PktsDataTableHeaderCellProps> = ({
  children,
  className,
  width,
  onLabelClick,
  sort = "NONE",
  ...other
}) => {
  const labelClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (typeof onLabelClick === "function") {
      onLabelClick(e);
    }
  };

  let style: any = {};
  if (width) {
    style.width = width;
  }

  return (
    <th className={className || ""} style={style} {...other}>
      <div onClick={labelClick} className="labelWrapper">
        {children}
        {sort && <PktsDataTableSortIcon sortDirection={sort} />}
      </div>
    </th>
  );
};

PktsDataTableHeaderCell.displayName = "PktsDataTableHeaderCell";

export default PktsDataTableHeaderCell;
