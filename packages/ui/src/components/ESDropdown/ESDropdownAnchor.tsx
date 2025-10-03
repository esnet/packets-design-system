import clsx from "clsx";
import React from "react";
import { ESDropdownAnchorProps } from "./ESDropdown.types";
import styles from "./ESDropdown.module.css";

/**
 * ESDropdownTrigger component, used to compose ESDropdown.
 *
 * @returns {React.ReactElement}
 */
export function ESDropdownAnchor({ children }: ESDropdownAnchorProps) {
  return <>{children}</>;
}

ESDropdownAnchor.displayName = "ESDropdownAnchor";

export default ESDropdownAnchor;
