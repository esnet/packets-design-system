import React from "react";
import { ArrowDownWideNarrowIcon, ArrowUpNarrowWideIcon } from "lucide-react";

/**
 * Get Icon
 *
 * return correct icon based on DataTableSortTypes type
 *
 * @param {string} type - DataTableSortTypes type
 * @returns {React.FunctionComponent}
 */
export const getSortIcon = (type: string) => {
  switch (type) {
    case "ASC":
      return <ArrowDownWideNarrowIcon size={16} />;
    case "DESC":
      return <ArrowUpNarrowWideIcon size={16} />;
    default:
      return <></>;
  }
};
