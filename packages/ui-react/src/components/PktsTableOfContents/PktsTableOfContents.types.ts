import { LinkType } from "../../lib/types";

export interface PktsTableOfContentsProps {
  title?: string;
  sections: LinkType[];
  isSticky?: boolean;
  renderSectionLink?: (link: LinkType) => React.ReactNode;
}
