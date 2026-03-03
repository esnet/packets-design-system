import React, { FC } from "react";
import { PktsDataTableHeadProps } from "./PktsDataTable.types";

/**
 * Data Table Head Component
 *
 * Generic composable data table head component
 *
 * @param {ESDataTableHeadProps} props - React props
 * @returns {FC<PktsDataTableHeadProps>}
 */
const PktsDataTableHead: FC<PktsDataTableHeadProps> = ({
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

PktsDataTableHead.displayName = "PktsDataTableHead";

export default PktsDataTableHead;
