import React from "react";
import clsx from "clsx";
import { PktsCommaSeperatedListProps } from "./PktsCommaSeperatedList.types";

/**
 * ES Comma Seperated List
 *
 * A generic list that appends commas to all list items
 * expect for the last one
 *
 * @param {ESCommaSeperatedListType} props
 * @returns {React.ReactElement}
 */
const PktsCommaSeperatedList: React.FC<PktsCommaSeperatedListProps> = ({
  items,
  className,
}) => {
  return (
    <ul className={clsx("pkts-comma-seperated-list", className)}>
      {items.map((item, i) => (
        <li
          key={`escomma-list-${i}`}
          className="comma-separated-list-item"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

PktsCommaSeperatedList.displayName = "PktsCommaSeperatedList";

export default PktsCommaSeperatedList;
