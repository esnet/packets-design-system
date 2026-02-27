/* eslint-disable no-unused-vars */
export const getESSpacerSizesCSS = (size: string) => {
  return `var(--esnet-size-spacing-${size})`;
};

export type PktsSpacerProps = {
  type: "vertical" | "hortizontal" | "square";
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
