/* eslint-disable no-unused-vars */
export enum ESSpacerType {
  VERTICAL = "vertical",
  HORIZONTAL = "horizontal",
  SQUARE = "square",
}

export enum ESSpacerSizes {
  NONE = "none",
  XXSMALL = "xxsmall",
  XSMALL = "xsmall",
  MEDIUM = "medium",
  LARGE = "large",
  XLARGE = "xlarge",
  XXLARGE = "xxlarge",
  XXXLARGE = "xxxlarge",
}

export const getESSpacerSizesCSS = (size: ESSpacerSizes) => {
  switch (size) {
    case ESSpacerSizes.NONE:
      return "var(--esnet-size-spacing-none)";
    case ESSpacerSizes.XXSMALL:
      return "var(--esnet-size-spacing-xxsmall)";
    case ESSpacerSizes.XSMALL:
      return "var(--esnet-size-spacing-xsmall)";
    case ESSpacerSizes.MEDIUM:
      return "var(--esnet-size-spacing-medium)";
    case ESSpacerSizes.LARGE:
      return "var(--esnet-size-spacing-large)";
    case ESSpacerSizes.XLARGE:
      return "var(--esnet-size-spacing-xlarge)";
    case ESSpacerSizes.XXLARGE:
      return "var(--esnet-size-spacing-xxlarge)";
    case ESSpacerSizes.XXXLARGE:
      return "var(--esnet-size-spacing-xxxlarge)";
    default:
      return "var(--esnet-size-spacing-none)";
  }
};

export interface ESSpacerProps {
  type: ESSpacerType;
  size: ESSpacerSizes;
  className?: string;
}
