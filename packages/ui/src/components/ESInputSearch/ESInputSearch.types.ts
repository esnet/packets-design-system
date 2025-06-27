import { LucideIcon } from "lucide-react";
import { ComponentPropsWithRef } from "react";

export interface ESInputSearchProps extends ComponentPropsWithRef<"input"> {
  variant?: "default" | "branded";
  error?: boolean;
  SearchIcon?: LucideIcon;
  onSearchClick?: () => void;
  SearchXIcon?: LucideIcon;
  onSearchXClick?: () => void;
}
