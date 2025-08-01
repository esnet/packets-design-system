import React, { FC } from "react";
import clsx from "clsx";
import IconChildHierarchyIndicator from "../../../assets/svgs/IconChildHierarchyIndicator";
import { ESListTreeLeafViewProps } from "../ESListTreeView.types";

import styles from "./ESListTreeLeafView.module.css";
import { CheckIcon, FileIcon } from "lucide-react";

/**
 * Data Table Sort Icon Component
 *
 * Icon component displaying an up or down icon
 * based on a sort state passed to it.
 *
 * @param {ESListTreeLeafViewProps} props - React props
 * @returns {React.FunctionComponent}
 */
const ESListTreeLeafView: FC<ESListTreeLeafViewProps> = ({
  children,
  isSublist = false,
  isSelected = true,
  icon,
  className = "",
}) => {
  const _icon = icon || FileIcon;

  return (
    <div
      className={clsx(
        styles.ESListTreeLeafView,
        isSublist && styles.isSublist,
        className
      )}
    >
      <section className={styles.contentWrapper}>
        {_icon && (
          <div className={styles.icon}>
            <IconChildHierarchyIndicator />
          </div>
        )}
        {!isSublist && (
          <div className={`${styles.icon} ${styles.leafIcon}`}>
            <_icon />
          </div>
        )}
        <section className={styles.content}>{children}</section>
        {!isSublist && isSelected == true && (
          <div className={`${styles.icon} ${styles.selectedIcon}`}>
            <CheckIcon />
          </div>
        )}
      </section>
    </div>
  );
};

ESListTreeLeafView.displayName = "ESListTreeLeafView";

export default ESListTreeLeafView;
