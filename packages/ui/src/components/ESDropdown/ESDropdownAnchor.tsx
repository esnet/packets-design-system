import clsx from "clsx";
import React from "react";
import { ESDropdownAnchorProps } from "./ESDropdown.types";
import styles from "./ESDropdown.module.css";

/**
 * ESDropdownTrigger component, used to compose ESDropdown.
 *
 * @returns {React.ReactElement}
 */
export function ESDropdownAnchor({
  children,
  className,
  ...props
}: ESDropdownAnchorProps) {
  return (
    <div {...props} className={clsx(styles.trigger, className)}>
      {children}
    </div>
  );
}

ESDropdownAnchor.displayName = "ESDropdownAnchor";

export default ESDropdownAnchor;
