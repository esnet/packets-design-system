import { ListItemLinkType, RenderListItemType } from "../../lib/utils/ListItem";

export interface ESTableOfContentsProps {
  title?: string;
  sections: ListItemLinkType[];
  isSticky?: boolean;
  renderSectionLink?: RenderListItemType;
}
