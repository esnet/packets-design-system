import { ListItemLinkType, RenderListItemType } from "../../lib/utils/ListItem";

export interface ESTableOfContentsProps {
  /** Title of the table of contents, shown at the top. */
  title?: string;
  /** Links to sections of content. */
  links: ListItemLinkType[];
  /** Whether the table of contents should be sticky and remain at the top of the viewport. */
  sticky?: boolean;
  /** Optional render function for the links, not recommended to change default unless needed. */
  renderLink?: RenderListItemType;
}
