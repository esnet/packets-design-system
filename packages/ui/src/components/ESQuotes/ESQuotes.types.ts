import { ComponentPropsWithoutRef } from "react";

/* eslint-disable no-undef */
export interface ESQuotesProps extends ComponentPropsWithoutRef<"blockquote"> {
  /** The quote as a ReactNode. Can be a string or React elements. */
  children: React.ReactNode;
  /** Type of quote. Use block quotes for externally cited quotes, and pull quotes as excerpts of the presented text. However, these are not strict rules, and they only affect styling. */
  quoteType?: "block" | "pull";
  /** Where to show the large quotation icons surrounding the children/text, only for block quotes. On small screen sizes less, the right quote is not displayed, regardless of setting. */
  quoteIcons?: "left" | "right" | "both" | "none";
}
