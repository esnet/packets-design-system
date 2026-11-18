export type PktsIconSize = "large" | "standalone" | "control" | "inline";

export interface PktsIconProps extends Partial<HTMLOrSVGElement> {
  /** @pkts-icon-name */
  name: string;
  size?: PktsIconSize;
  color?: string;
  strokeWidth?: number | string;
}
