import * as React from "react";

export interface ESCheckableListProps
  extends React.ComponentPropsWithRef<"fieldset"> {
  className?: string;
  legend?: React.ReactNode;
  children: React.ReactNode;
}
