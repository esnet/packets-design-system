import React from "react";

// An extension of anchor attributes, but href and children are required
export interface LinkType
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

// eslint-disable-next-line no-unused-vars
export type RenderLink = (linkProps: LinkType) => React.ReactNode;

export const defaultRenderLink: RenderLink = (linkProps) => {
  return <a {...linkProps} />;
};
