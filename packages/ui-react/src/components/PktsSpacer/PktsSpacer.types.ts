/* eslint-disable no-unused-vars */
export const getPktsSpacerSizesCSS = (size: string) => {
  return `var(--pkts-size-spacing-${size})`;
};

export type PktsSpacerProps = {
  type: "vertical" | "horizontal" | "square";
  size:
    | "none"
    | "xxsmall"
    | "xsmall"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "xxxlarge";

  className?: string;
};
