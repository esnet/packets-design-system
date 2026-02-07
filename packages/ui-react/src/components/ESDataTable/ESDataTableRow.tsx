import React, { FC } from "react";
import { ESDataTableRowProps } from "./ESDataTable.types";

/**
 * Data Table Row Component
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
    <tr className={className || ""} {...other}>
      {children}
    </tr>
  );
};

ESDataTableRow.displayName = "ESDataTableRow";

export default ESDataTableRow;
