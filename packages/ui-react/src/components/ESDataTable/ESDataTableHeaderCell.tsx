import React, { FC } from "react";
import { ESDataTableHeaderCellProps } from "./ESDataTable.types";

import ESDataTableSortIcon from "./ESDataTableSortIcon";

/**
 * Data Table Header Cell Component
 *
 * Generic composable data table header cell component
 *
 * @param {ESDataTableHeaderCellProps} props - React props
 * @returns {FC<ESDataTableHeaderCellProps>}
 */
const ESDataTableHeaderCell: FC<ESDataTableHeaderCellProps> = ({
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
        {sort && <ESDataTableSortIcon sortDirection={sort} />}
      </div>
    </th>
  );
};

ESDataTableHeaderCell.displayName = "ESDataTableHeaderCell";

export default ESDataTableHeaderCell;
