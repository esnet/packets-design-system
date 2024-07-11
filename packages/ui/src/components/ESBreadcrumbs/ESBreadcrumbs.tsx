import { FC } from "react";
import { BreadcrumbsProps } from "./ESBreadcrumbs.types";

import { defaultRenderLink } from "./ESBreadcrumbsUtils";

// @ts-ignore
import styles from "./ESBreadcrumbs.module.css";

/**
 * ESBreadcrumbs Component
 *
 * Factory component that intakes an array of bread crumb objects (href, and copy)
 * and returns a bread crumbs formatted component.
 *
 * @param {BreadcrumbsProps} props
 * @returns {JSX.Element}
 */
const ESBreadcrumbs: FC<BreadcrumbsProps> = ({
  breadcrumbs = [],
  renderLink = defaultRenderLink,
}) => {
  return (
    <ul className={`${styles.breadCrumbs}`}>
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
