import React from "react";
import clsx from "clsx";
import { ESCommaSeperatedListProps } from "./ESCommaSeperatedList.types";

import styles from "./ESCommaSeperatedList.module.css";
/**
 * ES Comma Seperated List
 *
 * A generic list that appends commas to all list items
 * expect for the last one
 *
 * @param {ESCommaSeperatedListType} props
 * @returns {React.ReactElement}
 */
const ESCommaSeperatedList: React.FC<ESCommaSeperatedListProps> = ({
  items,
  className,
}) => {
  return (
    <ul className={clsx(styles.ESCommaSeparatedList, className)}>
      {items.map((item, i) => (
        <li
          key={`escomma-list-${i}`}
          className={clsx(styles.commaSeparatedListItem)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

ESCommaSeperatedList.displayName = "ESCommaSeperatedList";

export default ESCommaSeperatedList;
