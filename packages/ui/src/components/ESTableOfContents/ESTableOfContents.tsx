import React from "react";
import clsx from "clsx";
import { ESTableOfContentsProps } from "./ESTableOfContents.types";
import styles from "./ESTableOfContents.module.css";
import { DefaultRenderListItem } from "../../lib/utils/ListItem";

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
 * @returns {React.ReactElement}
 */
const ESTableOfContents: React.FC<ESTableOfContentsProps> = ({
  title = "Table of Contents",
  links = [],
  sticky,
  renderLink = DefaultRenderListItem,
}) => {
  return (
    <nav className={clsx(styles.ESTableOfContents, sticky && styles.sticky)}>
      <h6 className={styles.title}>{title}</h6>
      <div className={styles.content}>
        <div className={styles.verticalLine} />
        <ul className={styles.list}>
          {links.map((link, index) => (
            <li key={`toc-link-${index}`}>{renderLink(link, index)}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

ESTableOfContents.displayName = "ESTableOfContents";

export default ESTableOfContents;
