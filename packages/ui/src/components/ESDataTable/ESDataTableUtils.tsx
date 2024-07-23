import { ArrowDownWideNarrowIcon, ArrowUpNarrowWideIcon } from "lucide-react";

import { ESDataTableSortTypes } from "./ESDataTable.types";

/**
 * Get Icon
 *
 * return correct icon based on DataTableSortTypes type
 *
 * @param {string} type - DataTableSortTypes type
 * @returns {React.FunctionComponent}
 */
export const getSortIcon = (type: ESDataTableSortTypes) => {
  switch (type) {
    case ESDataTableSortTypes.ASC:
      return <ArrowDownWideNarrowIcon size={16} />;
    case ESDataTableSortTypes.DESC:
      return <ArrowUpNarrowWideIcon size={16} />;
    default:
      return <></>;
  }
};
