import { ListItemLinkType, RenderListItemType } from "../../lib/utils/ListItem";

export interface ESTableOfContentsProps {
  /** Title of the table of contents, shown at the top. */
  title?: string;
  /** Whether the table of contents should be sticky and remain at the top of the viewport. */
  sticky?: boolean;
  /** Links to sections of content. */
  links: ListItemLinkType[];
  /** Optional render function for the links, not recommended to change default unless needed. */
  renderLink?: RenderListItemType;
}
