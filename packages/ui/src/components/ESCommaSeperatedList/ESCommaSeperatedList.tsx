import React from "react";
import { ESCommaSeperatedListType } from "./ESCommaSeperatedList.types";

// @ts-ignore
import styles from "./ESCommaSeperatedList.module.css";

import { defaultItemRender } from "./ESCommaSeperatedListUtils";
/**
 * ES Comma Seperated List
 *
 * A generic list that appends commas to all list items
 * expect for the last one
 *
 * @param {ESCommaSeperatedListType} props
 * @returns {React.FunctionComponent}
 */
const ESCommaSeperatedList = <T extends {}>({
  items,
  renderItem = defaultItemRender,
  className,
  listItemClassName,
}: ESCommaSeperatedListType<T>) => {
  return (
    <ul className={`${styles.commaSeparatedList} ${className || ""}`}>
      {items.map((item, i) => (
        <li
          key={`escomma-list-${i}`}
          className={`${styles.commaSeparatedListItem} ${listItemClassName || ""}`}
        >
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

ESCommaSeperatedList.displayName = "ESCommaSeperatedList";

export default ESCommaSeperatedList;
