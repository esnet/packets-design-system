/* eslint-disable no-unused-vars */
export interface ESCommaSeperatedListType<T> {
  items: T[];
  //Render the list items
  renderItem?: (item: T) => JSX.Element; //Or JSX.Element
  className?: string;
  listItemClassName?: string;
}
