import React from "react";
import { BreadcrumbsProps } from "./PktsBreadcrumbs.types";
import { defaultRenderLink } from "../../lib/utils/LinkTypeUtils";

// TODO: Make ESBreadcrumbs composable by relying on an ESBreadcrumb subcomponent instead of props
/**
 * ESBreadcrumbs Component
 *
 * Factory component that intakes an array of bread crumb objects (href, and copy)
 * and returns a bread crumbs formatted component.
 *
 * @param {BreadcrumbsProps} props
 * @returns {React.FunctionComponent}
 */
const PktsBreadcrumbs: React.FC<BreadcrumbsProps> = ({
  breadcrumbs = [],
  renderLink = defaultRenderLink,
}) => {
  return (
    <ul className="pkts-breadcrumbs">
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

PktsBreadcrumbs.displayName = "PktsBreadcrumbs";

export default PktsBreadcrumbs;
