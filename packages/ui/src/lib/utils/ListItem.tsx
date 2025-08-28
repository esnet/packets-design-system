import * as React from "react";

/**
 * Goals:
 * Provide a standard type definition so that users can write this type as a prop list and it can be rendered easily
 *
 * For some components (ESCommaSeparatedList), this is a list of text items, so props generally only include text
 *
 * For some components (ESBreadCrumbs, ESTableOfContents), this is a list of links, so a prop must also include href
 *
 * For some components (ESTabs), this is a list of tabs which include an onClick handler (need to look into current implementaiton)
 *
 * For some components (ESListTreeView), this is a more complicated list (TODO)
 *
 * For some components (ESInputTypeahead), this still needs to be figured out (TODO)
 */

interface ListItemBaseProps {
  children: React.ReactNode;
  key: string | number;
  [x: string]: any;
}
/**
 * Discriminated union type for `ListItemLinkType`, `ListItemTextType`, and `ListItemButtonType`. It's recommended to use one of these types directly instead of this union type.
 *
 * Provides a standard type definition for components that accept list-item like objects as props that are to be rendered inside of it.
 *
 * For example, `ESBreadcrumbs` takes in an array of `ListItemType` objects and should render them as a list of breadcrumbs (links).
 *
 * Used in conjunction with RenderListItem, which provides a default and simple way to render ListItemType objects.
 * Components should take in a prop of type `RenderListItemType` to allow for customization of rendering.
 *
 * @example
 * ```tsx
 *
 * interface CompWithListItemsProps {
 *   items: ListItemType[];
 *   renderListItem?: RenderListItemType;
 * }
 *
 * const ComponentWithListItems: React.FC<CompWithListItemsProps> = ({
 *   items,
 *   renderListItem = RenderListItem,
 * }) => {
 *   return <ul>{items.map((item) => renderListItem(item))}</ul>;
 * };
 *
 * ```
 */
export type ListItemType =
  | ListItemLinkType
  | ListItemTextType
  | ListItemButtonType;

/**
 * A discriminated type in `ListItemType` representing a link item. Useful for `ESBreadcrumbs` and `ESTableOfContents`.
 */
export interface ListItemLinkType extends ListItemBaseProps {
  type: "link";
  href: string;
  target?: string;
}

/**
 * A discriminated type in `ListItemType` representing an only-text item. Useful for `ESCommaSeparatedList`.
 */
export interface ListItemTextType extends ListItemBaseProps {
  type: "text";
}

/**
 * A discriminated type in `ListItemType` representing a button item. Useful for `ESTabs`.
 */
export interface ListItemButtonType extends ListItemBaseProps {
  type: "button";
  onClick: () => void;
}

/**
 * Function type definition for rendering ListItemType objects. When used in a component prop, it should be defaulted to `RenderListItem`.
 */
// eslint-disable-next-line no-unused-vars
export type RenderListItemType = (item: Partial<ListItemType>) => React.ReactNode;

/**
 * Default renderer for ListItemType objects.
 *
 * If ListItemType has an href, it is rendered with an anchor tag inside a list item.
 *
 * Otherwise, it is rendered as plain text inside a list item.
 *
 */
export const DefaultRenderListItem: RenderListItemType = (item) => {
  let content: React.ReactNode;
  switch (item.type) {
    case "link":
      content = <a {...item} />;
      break;
    case "button":
      content = <button {...item} />;
      break;
    default:
      content = item.children;
      break;
  }

  return <li key={item.key}>{content}</li>;
};
