import { ComponentPropsWithoutRef } from "react";

type SupportedCodeLanguages = "python" | "javascript" | "typescript";

export interface ESCodeBlockProps
  extends Omit<ComponentPropsWithoutRef<"pre">, "children"> {
  /** Text to be shown as code inside HTML <code> tag. Recommended to use a Javascript raw string rather than a regular string. */
  code: string;
  /** Code language, shown as a chip above the code. */
  language?: SupportedCodeLanguages | string;
  /** Callback function for clicking the copy button. Defaults to copying to clipboard, but can be modified if needed. */
  // eslint-disable-next-line no-unused-vars
  onClickCopy?: (code: ESCodeBlockProps["code"]) => void;
}
