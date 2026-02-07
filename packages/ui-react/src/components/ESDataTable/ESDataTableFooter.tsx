import React, { FC } from "react";
import { ESDataTableFooterProps } from "./ESDataTable.types";

/**
 * Data Table Footer Component
 *
 * Generic composable data table footer component
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
    <tfoot className={className || ""} {...other}>
      {children}
    </tfoot>
  );
};

ESDataTableFooter.displayName = "ESDataTableFooter";

export default ESDataTableFooter;
