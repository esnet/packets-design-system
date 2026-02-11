import React, { FC } from "react";
import { PktsDataTableFooterProps } from "./PktsDataTable.types";

/**
 * Data Table Footer Component
 *
 * Generic composable data table footer component
 *
 * @param {ESDataTableFooterProps} props - React props
 * @returns {FC<PktsDataTableFooterProps>}
 */
const PktsDataTableFooter: FC<PktsDataTableFooterProps> = ({
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

PktsDataTableFooter.displayName = "PktsDataTableFooter";

export default PktsDataTableFooter;
