import React, { FC, useState } from "react";
import { ESListTreeViewProps } from "./ESListTreeView.types";
import { ESListTreeLeafView } from "./partials";

import styles from "./ESListTreeView.module.css";
import { ChevronDownIcon, FolderOpenIcon, CheckIcon } from "lucide-react";

/**
 * ESListTreeView Component
 *
 * A name value pair visualization
 *
 * @param {ESListTreeViewProps} props
 * @returns {React.FunctionComponent}
 */
const ESListTreeView: FC<ESListTreeViewProps> & {
  ESListTreeLeafView: typeof ESListTreeLeafView;
} = ({
  content,
  children,
  initiallyOpen = true,
  isSelected = false,
  alwaysOpen = false,
  icon,
  className = "",
  onCheckmarkClick,
  onIconClick,
}) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen || alwaysOpen);
  const _icon = icon || FolderOpenIcon;

  // Events
  const _toggleIsOpen = () => {
    if (alwaysOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const _onAccordionIndicatorClick = (
    e: React.MouseEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    _toggleIsOpen();
  };

  const _onCheckmarkClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (typeof onCheckmarkClick === "function") {
      onCheckmarkClick(e);
    }
  };

  const _onIconClick = (e: React.MouseEvent<HTMLInputElement>) => {
    _toggleIsOpen();

    if (typeof onIconClick === "function") {
      onIconClick(e);
    }
  };

  return (
    <div className={`${styles.ESListTreeView} ${className}`}>
      <section className={styles.sectionRow}>
        <div
          className={`${styles.icon} ${styles.accordionIndicator} ${isOpen && styles.isOpen}`}
          onClick={_onAccordionIndicatorClick}
        >
          <ChevronDownIcon />
        </div>
        {_icon && (
          <div
            className={`${styles.icon} ${styles.groupIcon}`}
            onClick={_onIconClick}
          >
            <_icon />
          </div>
        )}
        {!!content && <div>{content}</div>}
        {isSelected == true && (
          <div
            className={`${styles.icon} ${styles.selectedIcon}`}
            onClick={_onCheckmarkClick}
          >
            <CheckIcon />
          </div>
        )}
      </section>
      {isOpen && <ul className={styles.list}>{children}</ul>}
    </div>
  );
};

ESListTreeView.displayName = "ESListTreeView";

ESListTreeView.ESListTreeLeafView = ESListTreeLeafView;

export default ESListTreeView;
