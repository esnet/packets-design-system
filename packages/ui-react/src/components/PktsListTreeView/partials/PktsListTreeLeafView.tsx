import React, { FC } from "react";
import clsx from "clsx";
import IconChildHierarchyIndicator from "../../../assets/svgs/IconChildHierarchyIndicator";
import { PktsListTreeLeafViewProps } from "../PktsListTreeView.types";

import { CheckIcon, FileIcon } from "lucide-react";

/**
 * PktsListTreeLeafView Component
 *
 * Leaf view component for tree structures
 *
 * @param {PktsListTreeLeafViewProps} props - React props
 * @returns {React.FunctionComponent}
 */
const PktsListTreeLeafView: FC<PktsListTreeLeafViewProps> = ({
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
        "pkts-list-tree-leaf-view",
        isSublist && "isSublist",
        className,
      )}
    >
      <section className="content-wrapper">
        {_icon && (
          <div className="icon">
            <IconChildHierarchyIndicator />
          </div>
        )}
        {!isSublist && (
          <div className="icon leafIcon">
            <_icon />
          </div>
        )}
        <section className="content">{children}</section>
        {!isSublist && isSelected == true && (
          <div className="icon selectedIcon">
            <CheckIcon />
          </div>
        )}
      </section>
    </div>
  );
};

PktsListTreeLeafView.displayName = "PktsListTreeLeafView";

export default PktsListTreeLeafView;
