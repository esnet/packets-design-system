import React from "react";
import { ESTitleSectionProps } from "./ESTitleSection.types";

// @ts-ignore
import styles from "./ESTitleSection.module.css";
import ESModule from "../ESModule";

/**
 * ESTitleSection Component
 *
 * Composable component for page regulating
 * the layouts of titles and subtitles.
 *
 * @param {ESTitleSectionProps} props
 * @returns {React.FunctionComponent}
 */
const ESTitleSection: React.FC<ESTitleSectionProps> = ({
  children,
  title = "",
  titleSlot,
  subtitle,
  subTitleSlot,
}) => {
  return (
    <ESModule className={styles.titleLayout}>
      {title && (
        <h1 className={styles.title}>
          {title}
          {titleSlot}
        </h1>
      )}
      {subtitle && (
        <h4 className={styles.subtitle}>
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
