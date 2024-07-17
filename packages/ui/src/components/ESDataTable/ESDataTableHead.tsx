import { FC } from "react";
import { ESDataTableHeadProps } from "./ESDataTable.types";

// @ts-ignore
import styles from "./ESDataTable.module.css";

/**
 * Data Table Head Component
 *
 * Generic composable data table head component
 *
 * @param {ESDataTableHeadProps} props - React props
 * @returns {FC<ESDataTableHeadProps>}
 */
const ESDataTableHead: FC<ESDataTableHeadProps> = ({
  children,
  className,
  ...other
}) => {
  return (
    <thead
      className={`${styles.tableHead} ${className ? className : ""}`}
      {...other}
    >
      <tr>{children}</tr>
    </thead>
  );
};

ESDataTableHead.displayName = "ESDataTableHead";

export default ESDataTableHead;
