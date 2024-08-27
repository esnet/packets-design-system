import React, { FC } from "react";
import { ESDataTableFooterProps } from "./ESDataTable.types";

// @ts-ignore
import styles from "./ESDataTable.module.css";

/**
 * Data Table Head Component
 *
 * Generic composable data table head component
 *
 * @param {ESDataTableFooterProps} props - React props
 * @returns {FC<ESDataTableFooterProps>}
 */
const ESDataTableFooter: FC<ESDataTableFooterProps> = ({
  children,
  className,
  ...other
}) => {
  return (
    <tfoot
      className={`${styles.tableFooter} ${className ? className : ""}`}
      {...other}
    >
      {children}
    </tfoot>
  );
};

ESDataTableFooter.displayName = "ESDataTableFooter";

export default ESDataTableFooter;
