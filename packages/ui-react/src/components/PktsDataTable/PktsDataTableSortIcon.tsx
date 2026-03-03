import React, { FC } from "react";
import { useMemo } from "react";
import { PktsDataTableSortIconProps } from "./PktsDataTable.types";

import { getSortIcon } from "./PktsDataTableUtils";

/**
 * Data Table Sort Icon Component
 *
 * Icon component displaying an up or down icon
 * based on a sort state passed to it.
 *
 * @param {ESDataTableSortIconProps} props - React props
 * @returns {React.FunctionComponent}
 */
const PktsDataTableSortIcon: FC<PktsDataTableSortIconProps> = ({
  sortDirection = "NONE",
}) => {
  const icon = useMemo(() => {
    if (!sortDirection) {
      return <></>;
    }

    return getSortIcon(sortDirection);
  }, [sortDirection]);

  return <span className="pkts-data-table-sort-icon">{icon}</span>;
};

PktsDataTableSortIcon.displayName = "PktsDataTableSortIcon";

export default PktsDataTableSortIcon;
