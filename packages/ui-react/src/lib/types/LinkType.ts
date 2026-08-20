import React from "react";

export interface LinkType {
  href: string;
  children: React.ReactNode;
  target?: string;
}
