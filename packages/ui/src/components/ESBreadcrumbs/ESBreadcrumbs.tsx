import React from "react";
import { ESBreadcrumbsProps } from "./ESBreadcrumbs.types";

import { defaultRenderLink } from "../../lib/utils/link";

import styles from "./ESBreadcrumbs.module.css";

/**
 * ESBreadcrumbs Component
 *
 * Takes in an array of breadcrumb objects, which have a required href and children attribute.
 *
 * @param {ESBreadcrumbsProps} props
 * @returns {React.FunctionComponent}
 * @example
 * <ESBreadcrumbs
 *   breadcrumbs={[
 *     {
 *       href: "/",
 *       children: "Home",
 *     },
 *     {
 *       href: "/docs",
 *       children: "Docs",
 *     },
 *     {
 *       href: "/docs/version3",
 *       children: "Version 3",
 *     },
 *   ]}
 * />;
 */
export function ESBreadcrumbs({
  breadcrumbs = [],
  renderLink = defaultRenderLink,
}: ESBreadcrumbsProps) {
  return (
    <ul className={`${styles.ESBreadCrumbs}`}>
      {breadcrumbs.map((breadcrumb, index) => (
        <li className={styles.breadCrumb} key={`breadcrumb-list-${index}`}>
          {renderLink(breadcrumb)}
        </li>
      ))}
    </ul>
  );
}

ESBreadcrumbs.displayName = "ESBreadcrumbs";

export default ESBreadcrumbs;
