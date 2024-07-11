export interface BreadCrumbType {
  href: string;
  copy: string;
  target?: string;
}

export interface BreadcrumbsProps {
  breadcrumbs: BreadCrumbType[];
  // eslint-disable-next-line no-unused-vars
  renderLink?: (breadcrumb: BreadCrumbType) => React.ReactNode;
}
