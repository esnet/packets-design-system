import { ComponentPropsWithoutRef } from "react";

type SupportedCodeLanguages = "python" | "javascript" | "typescript";

export interface PktsCodeBlockProps extends Omit<
  ComponentPropsWithoutRef<"pre">,
  "children"
> {
  /** Text to be shown as code.  Recommended to use a Javascript raw string rather than a regular string. */
  children: string;
  /** Code language, shown as a chip above the code. */
  language?: SupportedCodeLanguages | string;
  /** Callback function for clicking the copy button. Defaults to copying to clipboard, not recommended to change. */
  // eslint-disable-next-line no-unused-vars
  onClickCopy?: (code: PktsCodeBlockProps["children"]) => void;
}
