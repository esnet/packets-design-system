import { LinkType } from "../../lib/types";

export interface BreadcrumbsProps {
  breadcrumbs: LinkType[];
  className?: string;
  // eslint-disable-next-line no-unused-vars
  renderLink?: (breadcrumb: LinkType) => React.ReactNode;
}
