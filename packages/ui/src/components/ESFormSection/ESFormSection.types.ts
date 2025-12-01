import * as React from "react";

export interface ESFormSectionProps {
  title: string;
  titleURL?: string;
  descriptionSlot?: React.ReactNode;
  children: React.ReactNode;
  useColumnLayout?: boolean;
}
