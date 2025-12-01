import * as React from "react";
import { ListItemType } from "../../lib/utils/ListItem";

export interface BreadcrumbsProps {
  breadcrumbs: ListItemType[];
  // eslint-disable-next-line no-unused-vars
  renderLink?: (breadcrumb: ListItemType) => React.ReactNode;
}
