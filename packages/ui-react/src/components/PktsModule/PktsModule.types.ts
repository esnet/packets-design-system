import * as React from "react";

export interface PktsModuleProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "title"> {
  title?: React.ReactNode;
  surface?: boolean;
  children: React.ReactNode;
}
