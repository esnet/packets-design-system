import { LinkType } from "../../lib/types";

export interface BreadcrumbsProps {
  breadcrumbs: LinkType[];
  // eslint-disable-next-line no-unused-vars
  renderLink?: (breadcrumb: LinkType) => React.ReactNode;
}
