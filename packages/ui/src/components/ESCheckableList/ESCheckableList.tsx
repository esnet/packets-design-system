import * as React from "react";
import clsx from "clsx";
import styles from "./ESCheckableList.module.css";
import { ESCheckableListProps } from "./ESCheckableList.types";

/**
 * ESCheckableList Component
 *
 * @param {ESCheckableListProps} props
 * @returns {React.ReactElement}
 */
const ESCheckableList: React.FC<ESCheckableListProps> = ({
  className,
  legend,
  children,
}) => {
  return (
    <fieldset className={clsx(styles.ESCheckableList, className)}>
      {legend && <legend className={styles.legend}>{legend}</legend>}
      <div className={styles.items}>{children}</div>
    </fieldset>
  );
};

ESCheckableList.displayName = "ESCheckableList";

export default ESCheckableList;
