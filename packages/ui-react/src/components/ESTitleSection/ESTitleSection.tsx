import React from "react";
import { ESTitleSectionProps } from "./ESTitleSection.types";
import ESModule from "../ESModule";

/**
 * ESTitleSection Component
 *
 * Composable component for page regulating
 * the layouts of titles and subtitles.
 *
 * @param {ESTitleSectionProps} props
 * @returns {React.ReactElement}
 */
const ESTitleSection: React.FC<ESTitleSectionProps> = ({
  children,
  title = "",
  titleSlot,
  subtitle,
  subTitleSlot,
}) => {
  return (
    <ESModule className="titleLayout">
      {title && (
        <h1 className="title">
          {title}
          {titleSlot}
        </h1>
      )}
      {subtitle && (
        <h4 className="subtitle">
          {subtitle}
          {subTitleSlot}
        </h4>
      )}
      {children}
    </ESModule>
  );
};

ESTitleSection.displayName = "ESTitleSection";

export default ESTitleSection;
