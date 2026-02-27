import React from "react";
import { PktsTitleSectionProps } from "./PktsTitleSection.types";
import PktsModule from "../PktsModule";

/**
 * ESTitleSection Component
 *
 * Composable component for page regulating
 * the layouts of titles and subtitles.
 *
 * @param {PktsTitleSectionProps} props
 * @returns {React.ReactElement}
 */
const PktsTitleSection: React.FC<PktsTitleSectionProps> = ({
  children,
  title = "",
  titleSlot,
  subtitle,
  subTitleSlot,
}) => {
  return (
    <PktsModule className="titleLayout">
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
    </PktsModule>
  );
};

PktsTitleSection.displayName = "PktsTitleSection";

export default PktsTitleSection;
