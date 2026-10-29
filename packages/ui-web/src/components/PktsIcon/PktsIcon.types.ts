export type PktsIconSize = "large" | "standalone" | "control" | "inline";

export interface PktsIconProps extends Partial<HTMLOrSVGElement> {
  name: string;
  size?: PktsIconSize | number | string;
  color?: string;
  strokeWidth?: number | string;
  class?: string;
  fill?: string;
}
