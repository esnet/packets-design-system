import { LinkType } from "../../lib/types";

export interface ESTableOfContentsProps {
  title?: string;
  sections: LinkType[];
  isSticky?: boolean;
  className?: string;
  renderSectionLink?: (link: LinkType) => React.ReactNode;
}
