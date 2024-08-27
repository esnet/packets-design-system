import React, { FC } from "react";
import { ESDataTableBodyProps } from "./ESDataTable.types";

// @ts-ignore
import styles from "./ESDataTable.module.css";

/**
 * Data Table Head Component
 *
 * Generic composable data table head component
 *
 * @param {ESDataTableBodyProps} props - React props
 * @returns {FC<ESDataTableBodyProps>}
 */
const ESDataTableBody: FC<ESDataTableBodyProps> = ({
  children,
  className,
  ...other
}) => {
  return (
    <tbody
      className={`${styles.tableBody} ${className ? className : ""}`}
      {...other}
    >
      {children}
    </tbody>
  );
};

ESDataTableBody.displayName = "ESDataTableBody";

export default ESDataTableBody;
