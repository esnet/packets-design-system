import React from "react";
import clsx from "clsx";
import { ESTableOfContentsProps } from "./ESTableOfContents.types";
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
}) => {
  return (
    <nav
      className={clsx(styles.ESTableOfContents, isSticky && styles.isSticky)}
    >
      <h6 className={styles.title}>{title}</h6>
      <ul className={styles.list}>
        {sections.map((sectionLink, index) => {
          return (
            <li key={`table-of-contents-section-${index}`}>
              <a href={sectionLink.href} target={sectionLink.target}>
                {sectionLink.children}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

ESTableOfContents.displayName = "ESTableOfContents";

export default ESTableOfContents;
