import React from "react";
import { BreadcrumbsProps } from "./ESBreadcrumbs.types";

import { defaultRenderLink } from "../../lib/utils/LinkTypeUtils";

import styles from "./ESBreadcrumbs.module.css";

/**
 * ESBreadcrumbs Component
 *
 * Factory component that intakes an array of bread crumb objects (href, and copy)
 * and returns a bread crumbs formatted component.
 *
 * @param {BreadcrumbsProps} props
 * @returns {React.FunctionComponent}
 */
const ESBreadcrumbs: React.FC<BreadcrumbsProps> = ({
  breadcrumbs = [],
  renderLink = defaultRenderLink,
}) => {
  return (
    <ul className={`${styles.ESBreadCrumbs}`}>
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <li className={styles.breadCrumb} key={`breadcrumb-list-${index}`}>
            {renderLink(breadcrumb)}
          </li>
        );
      })}
    </ul>
  );
};

ESBreadcrumbs.displayName = "ESBreadcrumbs";

export default ESBreadcrumbs;
