import React, { FC } from "react";
import { ESDataTableBodyProps } from "./ESDataTable.types";

/**
 * Data Table Body Component
 *
 * Generic composable data table body component
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
    <tbody className={className || ""} {...other}>
      {children}
    </tbody>
  );
};

ESDataTableBody.displayName = "ESDataTableBody";

export default ESDataTableBody;
