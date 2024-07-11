import { BreadCrumbType } from "./ESBreadcrumbs.types";

export const defaultRenderLink = (breadcrumb: BreadCrumbType) => {
  const { href, copy, target = "_self" } = breadcrumb;

  return (
    <a href={href} target={target}>
      {copy}
    </a>
  );
};
