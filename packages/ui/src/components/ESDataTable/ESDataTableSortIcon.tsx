import React, { FC } from "react";
import { useMemo } from "react";
import {
  ESDataTableSortIconProps,
  ESDataTableSortTypes,
} from "./ESDataTable.types";

// @ts-ignore
import styles from "./ESDataTableSortIcon.module.css";
import { getSortIcon } from "./ESDataTableUtils";

/**
 * Data Table Sort Icon Component
 *
 * Icon component displaying an up or down icon
 * based on a sort state passed to it.
 *
 * @param {ESDataTableSortIconProps} props - React props
 * @returns {React.FunctionComponent}
 */
const ESDataTableSortIcon: FC<ESDataTableSortIconProps> = ({
  sortDirection = ESDataTableSortTypes.NONE,
}) => {
  const icon = useMemo(() => {
    if (!sortDirection) {
      return <></>;
    }

    return getSortIcon(sortDirection);
  }, [sortDirection]);

  return <span className={styles.sortIcon}>{icon}</span>;
};

ESDataTableSortIcon.displayName = "ESDataTableSortIcon";

export default ESDataTableSortIcon;
