import { LinkType, RenderLink } from "../../lib/utils/link";

export interface PktsBreadcrumbsProps {
  /** Breadcrumbs objects, where an `href` and `children` prop must be provided. */
  breadcrumbs: LinkType[];
  /** Custom function to render each individual breadcrumb. Default to simply utilizing an anchor tag. */
  renderLink?: RenderLink;
}
