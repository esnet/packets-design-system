import React from "react";

// An extension of anchor attributes, but href and children are required
export interface LinkType
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const defaultRenderLink = (linkProps: LinkType) => {
  return <a {...linkProps} />;
};
