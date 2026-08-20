import React from "react";

export interface PktsListTreeViewProps {
  content?: React.ReactNode;
  children: React.ReactNode;
  initiallyOpen?: boolean;
  isSelected?: boolean;
  alwaysOpen?: boolean;
  icon?: React.ElementType;
  className?: string;
  onCheckmarkClick?: (_e: React.MouseEvent<HTMLInputElement>) => void;
  onIconClick?: (_e: React.MouseEvent<HTMLInputElement>) => void;
}

export interface PktsListTreeLeafViewProps {
  children: React.ReactNode;
  isSublist?: boolean;
  isSelected?: boolean;
  icon?: React.ElementType;
  className?: string;
}
