import clsx from "clsx";
import React from "react";
import { ESDropdownContentProps } from "./ESDropdown.types";
import styles from "./ESDropdown.module.css";

/**
 * ESDropdownContent component, used to compose ESDropdown.
 *
 * @returns {React.ReactElement}
 */
export function ESDropdownContent({
  children,
  className,
  ...props
}: ESDropdownContentProps) {
  return (
    <div {...props} className={clsx(styles.content, className)}>
      {children}
    </div>
  );
}

ESDropdownContent.displayName = "ESDropdownContent";

export default ESDropdownContent;
