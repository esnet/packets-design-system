import { LinkType } from "../../lib/types";

export interface PktsFormSectionProps {
  // eslint-disable-next-line no-unused-vars
  renderTitleLink?: (link: LinkType) => React.ReactNode;
  title: string;
  titleURL?: string;
  descriptionSlot?: React.ReactNode;
  children: React.ReactNode;
  useColumnLayout?: boolean;
}
