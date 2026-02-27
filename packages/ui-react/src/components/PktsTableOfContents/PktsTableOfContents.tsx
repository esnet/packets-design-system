import React from "react";
import clsx from "clsx";
import { PktsTableOfContentsProps } from "./PktsTableOfContents.types";

import { defaultRenderLink } from "../../lib/utils/LinkTypeUtils";

/**
 * PktsTableOfContents Component
 *
 * Visual representation of the sections of a page.
 * Composed from an array of sections(LinkType) ({
 *   href: string;
 *   children: React.ReactNode;
 *   target?: string;
 *   })
 *
 * @param {PktsTableOfContentsProps} props
 * @returns {React.FunctionComponent}
 */
const PktsTableOfContents: React.FC<PktsTableOfContentsProps> = ({
  title = "Table of Contents",
  sections = [],
  isSticky = true,
  renderSectionLink = defaultRenderLink,
}) => {
  return (
    <nav
      className={clsx("pkts-table-of-contents", isSticky && "pkts-sticky")}
    >
      <h6>{title}</h6>
      <ul>
        {sections.map((sectionLink, index) => {
          return (
            <li key={`table-of-contents-section-${index}`}>
              {renderSectionLink(sectionLink)}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

PktsTableOfContents.displayName = "PktsTableOfContents";

export default PktsTableOfContents;
