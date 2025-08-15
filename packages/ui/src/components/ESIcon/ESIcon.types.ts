import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

export interface ESIconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
}
