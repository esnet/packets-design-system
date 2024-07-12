import { LinkType } from "../../lib/types";

export interface ESTableOfContentsProps {
  title?: string;
  sections: LinkType[];
  isSticky?: boolean;
  renderSectionLink?: (link: LinkType) => React.ReactNode;
}
