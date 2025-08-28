import * as React from "react";

/**
 * Provides a standard type definition for link-like objects that can be rendered as a part of other components.
 *
 * Components can take a list of LinkType objects and render them as needed, such as seen in ESBreadcrumbs.
 *
 * Used in conjunction with RenderLink, which provides a standard and simple way to render LinkType,
 * but components can take in props to customize this.
 */

export interface LinkType {
  href: string;
  target?: string;
  children: React.ReactNode;
}

export const RenderLink = (link: LinkType) => {
  const { href, children, target = "_top" } = link;

  return (
    <a href={href} target={target}>
      {children}
    </a>
  );
};
