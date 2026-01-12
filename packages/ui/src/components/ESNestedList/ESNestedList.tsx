import * as React from "react";
import { ESNestedListItemProps, ESNestedListProps } from "./ESNestedList.types";
import styles from "./ESNestedList.module.css";
import clsx from "clsx";

/**
 * ESNestedList component
 *
 * Unordered list component that supports smooth styling for variable depth nesting.
 *
 * Children of an ESNestedList component can be ESNestedListItem or another ESNestedList
 *
 * @param {ESModuleProps} props
 * @returns {React.ReactElement}
 */
export function ESNestedList({ header, children }: ESNestedListProps) {
  return (
    <div className={styles.ESNestedList}>
      {header && <span>{header}</span>}
      <ul className={styles.list}>{children}</ul>
    </div>
  );
}
export function ESNestedListItem({
  children,
  noDisc = false,
}: ESNestedListItemProps) {
  return (
    <li className={clsx(styles.ESNestedListItem, noDisc && styles.noDisc)}>
      {children}
    </li>
  );
}
