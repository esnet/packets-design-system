import React from "react";
import { ESDropdownAnchorProps } from "./ESDropdown.types";

/**
 * ESDropdownAnchor component, used to compose ESDropdown. Used as a wrapper to indicate elements that should belong to the dropdown's anchor. Takes all attributes a div would take.
 *
 * @returns {React.ReactElement}
 */
export function ESDropdownAnchor(props: ESDropdownAnchorProps) {
  return <div {...props} />;
}

ESDropdownAnchor.displayName = "ESDropdownAnchor";

export default ESDropdownAnchor;
