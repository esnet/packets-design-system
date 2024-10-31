import React, { FC } from "react";
import {
  ESDataTableHeaderCellProps,
} from "./ESDataTable.types";

import ESDataTableSortIcon from "./ESDataTableSortIcon";

// @ts-ignore
import styles from "./ESDataTable.module.css";

/**
 * Data Table Head Component
 *
 * Generic composable data table head component
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
    <td
      className={`${styles.tableHeadCell} ${className ? className : ""}`}
      style={style}
      {...other}
    >
      <div onClick={labelClick} className={styles.labelWrapper}>
        {children}
        {sort && <ESDataTableSortIcon sortDirection={sort} />}
      </div>
    </td>
  );
};

ESDataTableHeaderCell.displayName = "ESDataTableHeaderCell";

export default ESDataTableHeaderCell;
