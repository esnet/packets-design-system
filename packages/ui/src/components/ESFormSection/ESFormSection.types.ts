import { LinkType } from "../../lib/types";

export interface ESFormSectionProps {
  // eslint-disable-next-line no-unused-vars
  renderTitleLink?: (link: LinkType) => React.ReactNode;
  title: string;
  titleURL?: string;
  descriptionSlot?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  useColumnLayout?: boolean;
}
