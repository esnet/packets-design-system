import React from "react";
import { BreadcrumbsProps } from "./ESBreadcrumbs.types";

import { defaultRenderLink } from "../../lib/utils/LinkTypeUtils";

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
    <ul className="es-breadcrumbs">
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <li key={`breadcrumb-list-${index}`}>
            {renderLink(breadcrumb)}
          </li>
        );
      })}
    </ul>
  );
};

ESBreadcrumbs.displayName = "ESBreadcrumbs";

export default ESBreadcrumbs;
