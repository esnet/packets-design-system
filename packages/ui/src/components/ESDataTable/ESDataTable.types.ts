/* eslint-disable no-unused-vars */
import React from "react";

export type ESDataTableProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

export type ESDataTableType = ESDataTableProps;

export interface ESDataTableHeadProps {
  children: React.ReactNode;
  className?: string;
}

export interface ESDataTableHeaderCellProps {
  children: React.ReactNode;
  className?: string;
  width?: string;
  onLabelClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  sort?: "ASC" | "DESC" | "NONE";
}

export interface ESDataTableBodyProps {
  children: React.ReactNode;
  className?: string;
}

export interface ESDataTableRowProps {
  children: React.ReactNode;
  className?: string;
}

export interface ESDataTableSortIconProps {
  sortDirection?: "ASC" | "DESC" | "NONE";
}

export interface ESDataTableCellProps {
  children?: React.ReactNode;
  className?: string;
  columnLabel?: string;
  colSpan?: number;
}

export interface ESDataTableSkeletonLoadingProps {
  className?: string;
  rowCount?: number;
  columnCount?: number;
}

export interface ESDataTableFooterProps {
  children: React.ReactNode;
  className?: string;
}
