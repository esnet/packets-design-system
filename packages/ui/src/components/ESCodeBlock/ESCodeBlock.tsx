import React, { useState } from "react";
import clsx from "clsx";
import styles from "./ESCodeBlock.module.css";
import { ESCodeBlockProps } from "./ESCodeBlock.types";
import ESIcon from "../ESIcon";

/**
 * ESCodeBlock Component
 *
 * Renders blocks of code, with a chip showing code language and a copy button.
 *
 * TODO: Code highlighting.
 *
 * @param {ESCodeBlockProps} props
 * @returns {React.ReactElement}
 */
export function ESCodeBlock({
  code,
  language = "code",
  onClickCopy = undefined,
  className,
  ...props
}: ESCodeBlockProps) {
  const [copied, setCopied] = useState(false);
const _onCopy = onClickCopy
  ? () => onClickCopy(code)
  : async () => {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      } catch (err) {
        console.error(err);
      }
    };

  return (
    <pre className={clsx(styles.ESCodeBlock, className)} {...props}>
      <div className={styles.top}>
        <div className={styles.codeChip}>{language}</div>
        <button className={styles.copyIconButton} onClick={() => _onCopy()}>
          <ESIcon name={copied ? "check" : "copy"} />
        </button>
      </div>
      <code className={styles.code}>{code}</code>
    </pre>
  );
}

ESCodeBlock.displayName = "ESCodeBlock";

export default ESCodeBlock;
