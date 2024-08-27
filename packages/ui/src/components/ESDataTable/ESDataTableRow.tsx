import React, { FC } from "react";
import { ESDataTableRowProps } from "./ESDataTable.types";

// @ts-ignore
import styles from "./ESDataTable.module.css";

/**
 * Data Table Head Component
 *
 * Generic composable data table row component
 *
 * @param {ESDataTableRowProps} props - React props
 * @returns {FC<ESDataTableRowProps>}
 */
const ESDataTableRow: FC<ESDataTableRowProps> = ({
  children,
  className,
  ...other
}) => {
  return (
    <tr
      className={`${styles.tableRow} ${className ? className : ""}`}
      {...other}
    >
      {children}
    </tr>
  );
};

ESDataTableRow.displayName = "ESDataTableRow";

export default ESDataTableRow;
