import React, { FC } from "react";
import { ESDataTableHeadProps } from "./ESDataTable.types";

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
    <thead className={className || ""} {...other}>
      <tr>{children}</tr>
    </thead>
  );
};

ESDataTableHead.displayName = "ESDataTableHead";

export default ESDataTableHead;
