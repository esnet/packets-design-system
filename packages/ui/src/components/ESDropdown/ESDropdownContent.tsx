import clsx from "clsx";
import React from "react";
import { ESDropdownContentProps } from "./ESDropdown.types";
import styles from "./ESDropdown.module.css";

/**
 * ESDropdownContent component, used to compose ESDropdown.
 *
 * @returns {React.ReactElement}
 */
export function ESDropdownContent({ children }: ESDropdownContentProps) {
  return <>{children}</>;
}

ESDropdownContent.displayName = "ESDropdownContent";

export default ESDropdownContent;
