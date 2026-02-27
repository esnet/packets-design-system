import React, { FC, useMemo } from "react";
import { PktsTabsProps } from "./PktsTabs.types";

import PktsTab from "./PktsTab";
import clsx from "clsx";

/**
 * ESTabs Component
 *
 * Composable component that manages the layout of a list of tabs.
 *
 * @param {PktsTabsProps} props
 * @returns {React.FunctionComponent}
 */
const PktsTabs: FC<PktsTabsProps> = ({
  children,
  className,
  border = false,
  verticalPadding = true,
}) => {
  const tabChildren = useMemo(() => {
    return React.Children.toArray(children).filter(
      (child) => (child as React.ReactElement).type !== PktsTab.displayName,
    );
  }, [children]);

  return (
    <section
      className={clsx(
        "pkts-tabs",
        border && "pkts-has-border",
        !verticalPadding && "pkts-no-padding",
        className,
      )}
    >
      <ul className="tab-list">{tabChildren}</ul>
    </section>
  );
};

PktsTabs.displayName = "PktsTabs";

export default PktsTabs;
