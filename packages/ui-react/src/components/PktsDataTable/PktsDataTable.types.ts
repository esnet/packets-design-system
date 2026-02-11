/* eslint-disable no-unused-vars */
import React from "react";

export type PktsDataTableProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

export type PktsDataTableType = PktsDataTableProps;

export interface PktsDataTableHeadProps {
  children: React.ReactNode;
  className?: string;
}

export interface PktsDataTableHeaderCellProps {
  children: React.ReactNode;
  className?: string;
  width?: string;
  onLabelClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  sort?: "ASC" | "DESC" | "NONE";
}

export interface PktsDataTableBodyProps {
  children: React.ReactNode;
  className?: string;
}

export interface PktsDataTableRowProps {
  children: React.ReactNode;
  className?: string;
}

export interface PktsDataTableSortIconProps {
  sortDirection?: "ASC" | "DESC" | "NONE";
}

export interface PktsDataTableCellProps {
  children?: React.ReactNode;
  className?: string;
  columnLabel?: string;
  colSpan?: number;
}

export interface PktsDataTableSkeletonLoadingProps {
  className?: string;
  rowCount?: number;
  columnCount?: number;
}

export interface PktsDataTableFooterProps {
  children: React.ReactNode;
  className?: string;
}
