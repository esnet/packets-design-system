import React from "react";
import { PktsTabProps } from "./PktsTabs.types";
import clsx from "clsx";

/**
 * PktsTab Component
 *
 * Composable component that manages the layout of a list of tabs.
 *
 * @param {PktsTabProps} props
 * @returns {React.FunctionComponent}
 */
const PktsTab: React.FC<PktsTabProps> = ({
  children,
  className = "",
  isActive = false,
}) => {
  return (
    <li
      className={clsx("pkts-tab", isActive && "pkts-active", className)}
    >
      {children}
    </li>
  );
};

PktsTab.displayName = "PktsTab";

export default PktsTab;
