import React, { FC, useState } from "react";
import { PktsListTreeViewProps } from "./PktsListTreeView.types";
import { PktsListTreeLeafView } from "./partials";
import clsx from "clsx";

import { ChevronDownIcon, FolderOpenIcon, CheckIcon } from "lucide-react";

/**
 * PktsListTreeView Component
 *
 * A name value pair visualization
 *
 * @param {PktsListTreeViewProps} props
 * @returns {React.FunctionComponent}
 */
const PktsListTreeView: FC<PktsListTreeViewProps> & {
  PktsListTreeLeafView: typeof PktsListTreeLeafView;
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
  const _icon: any = icon || FolderOpenIcon;

  // Events
  const _toggleIsOpen = () => {
    if (alwaysOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const _onAccordionIndicatorClick = (
    e: React.MouseEvent<HTMLInputElement>,
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
    <div className={clsx("pkts-list-tree-view", className)}>
      <section className="section-row">
        <div
          className={clsx("icon", "accordion-indicator", isOpen && "isOpen")}
          onClick={_onAccordionIndicatorClick}
        >
          <ChevronDownIcon />
        </div>
        {_icon && (
          <div
            className="icon groupIcon"
            onClick={_onIconClick}
          >
            <_icon />
          </div>
        )}
        {!!content && <div>{content}</div>}
        {isSelected == true && (
          <div
            className="icon selectedIcon"
            onClick={_onCheckmarkClick}
          >
            <CheckIcon />
          </div>
        )}
      </section>
      {isOpen && <ul className="list">{children}</ul>}
    </div>
  );
};

PktsListTreeView.displayName = "PktsListTreeView";

PktsListTreeView.PktsListTreeLeafView = PktsListTreeLeafView;

export default PktsListTreeView;
