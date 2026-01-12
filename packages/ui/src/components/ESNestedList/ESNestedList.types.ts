import React from "react";

export type ESNestedListProps = {
  /** List header, recommended but not necessary to have. */
  header?: React.ReactNode;
  /** ESNestedListItem or ESNestedList (for further nesting) children. */
  children: React.ReactNode;
};

export type ESNestedListItemProps = {
  /** Nested list item content, typically text, wrapped in a `<li>` tag. */
  children: React.ReactNode;
  /** Whether to show a bullet point. */
  noDisc?: boolean;
};
