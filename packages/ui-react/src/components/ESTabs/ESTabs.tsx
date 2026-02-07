import React, { FC, useMemo } from "react";
import { ESTabsProps } from "./ESTabs.types";

import ESTab from "./ESTab";
import clsx from "clsx";

/**
 * ESTabs Component
 *
 * Composable component that manages the layout of a list of tabs.
 *
 * @param {ESTabsProps} props
 * @returns {React.FunctionComponent}
 */
const ESTabs: FC<ESTabsProps> = ({
  children,
  className,
  border = false,
  verticalPadding = true,
}) => {
  const tabChildren = useMemo(() => {
    return React.Children.toArray(children).filter(
      (child) => (child as React.ReactElement).type !== ESTab.displayName,
    );
  }, [children]);

  return (
    <section
      className={clsx(
        "es-tabs",
        border && "es-has-border",
        !verticalPadding && "es-no-padding",
        className,
      )}
    >
      <ul className="tab-list">{tabChildren}</ul>
    </section>
  );
};

ESTabs.displayName = "ESTabs";

export default ESTabs;
