import { LinkType } from "../types";

export const defaultRenderLink = (link: LinkType) => {
  const { href, children, target = "_top" } = link;

  return (
    <a href={href} target={target}>
      {children}
    </a>
  );
};
