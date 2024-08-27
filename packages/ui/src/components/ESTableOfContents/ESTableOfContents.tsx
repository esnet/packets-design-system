import React from "react";
import { ESTableOfContentsProps } from "./ESTableOfContents.types";

import { defaultRenderLink } from "../../lib/utils/LinkTypeUtils";

// @ts-ignore
import styles from "./ESTableOfContents.module.css";

/**
 * ESTableOfContents Component
 *
 * Visual representation of the sections of a page.
 * Composed from an array of sections(LinkType) ({
 *   href: string;
 *   children: React.ReactNode;
 *   target?: string;
 *   })
 *
 * @param {ESTableOfContentsProps} props
 * @returns {React.FunctionComponent}
 */
const ESTableOfContents: React.FC<ESTableOfContentsProps> = ({
  title = "Table of Contents",
  sections = [],
  isSticky = true,
  renderSectionLink = defaultRenderLink,
}) => {
  return (
    <nav
      className={`${styles.tableOfContents} ${isSticky ? styles.isSticky : ""}`}
    >
      <h6 className={styles.title}>{title}</h6>
      <ul className={styles.list}>
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

ESTableOfContents.displayName = "ESTableOfContents";

export default ESTableOfContents;
