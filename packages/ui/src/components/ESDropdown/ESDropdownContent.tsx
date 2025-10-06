import React from "react";
import { ESDropdownContentProps } from "./ESDropdown.types";

/**
 * ESDropdownContent component, used to compose ESDropdown. Used as a wrapper to indicate elements that should belong to the dropdown's component. Takes all attributes a div would take.
 *
 * @returns {React.ReactElement}
 */
export function ESDropdownContent(props: ESDropdownContentProps) {
  return <div {...props} />;
}

ESDropdownContent.displayName = "ESDropdownContent";

export default ESDropdownContent;
