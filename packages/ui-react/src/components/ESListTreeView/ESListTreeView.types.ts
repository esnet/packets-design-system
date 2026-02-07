import React from "react";

export interface ESListTreeViewProps {
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

export interface ESListTreeLeafViewProps {
  children: React.ReactNode;
  isSublist?: boolean;
  isSelected?: boolean;
  icon?: React.ReactNode;
  className?: string;
}
