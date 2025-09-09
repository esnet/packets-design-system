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
  return (
    <div
      className={clsx(
        styles.ESQuotes,
        styles[quoteType],
        styles[quoteIcons],
        className
      )}
    >
      <ESIcon
        name="quote"
        className={
          quoteIcons === "left" || quoteIcons === "both" ? "" : styles.hide
        }
      />
      <blockquote>&ldquo;{children}&rdquo;</blockquote>
      <ESIcon
        name="quote"
        className={
          quoteIcons === "right" || quoteIcons === "both" ? "" : styles.hide
        }
      />
    </div>
  );
}

ESQuotes.displayName = "ESQuotes";

export default ESQuotes;
