import React from "react";
import clsx from "clsx";
import styles from "./ESQuotes.module.css";
import { ESQuotesProps } from "./ESQuotes.types";
import ESIcon from "../ESIcon";

/**
 * ESQuotes Component
 *
 * @param {ESQuotesProps} props
 * @returns {React.ReactElement}
 */
export function ESQuotes({
  quoteType = "block",
  quoteIcons = "both",
  children,
  className,
}: ESQuotesProps) {
  const showLeftIcon = quoteIcons === "left" || quoteIcons === "both";
  const showRightIcon = quoteIcons === "right" || quoteIcons === "both";

  return (
    <div className={clsx(styles.ESQuotes, styles[quoteType], className)}>
      {showLeftIcon && <ESIcon name="quote" />}
      <blockquote>&ldquo;{children}&rdquo;</blockquote>
      {showRightIcon && <ESIcon name="quote" />}
    </div>
  );
}

ESQuotes.displayName = "ESQuotes";

export default ESQuotes;
