import clsx from "clsx";
import React from "react";
import { ESDropdownTriggerProps } from "./ESDropdown.types";
import styles from "./ESDropdown.module.css";

/**
 * ESDropdownTrigger component, used to compose ESDropdown.
 *
 * @returns {React.ReactElement}
 */
export function ESDropdownTrigger({
  children,
  className,
  ...props
}: ESDropdownTriggerProps) {
  return (
    <div {...props} className={clsx(styles.trigger, className)}>
      {children}
    </div>
  );
}

ESDropdownTrigger.displayName = "ESDropdownTrigger";

export default ESDropdownTrigger;
