import React from "react";

export interface PktsListTreeViewProps {
  content?: React.ReactNode;
  children: React.ReactNode;
  initiallyOpen?: boolean;
  isSelected?: boolean;
  alwaysOpen?: boolean;
  icon?: React.ReactNode;
  className?: string;
  onCheckmarkClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onIconClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export interface PktsListTreeLeafViewProps {
  children: React.ReactNode;
  isSublist?: boolean;
  isSelected?: boolean;
  icon?: React.ReactNode;
  className?: string;
}
