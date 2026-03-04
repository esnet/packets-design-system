import React, { useState } from "react";
import clsx from "clsx";
import styles from "./PktsCodeBlock.module.css";
import { Check, Copy } from "lucide-react";
import type { PktsCodeBlockProps } from "./PktsCodeBlock.types";

/**
 * ESCodeBlock Component
 *
 * Renders blocks of code, with a chip showing code language and a copy button.
 *
 * TODO: Code highlighting based on language.
 *
 * @param {PktsCodeBlockProps} props
 * @returns {React.ReactElement}
 */
export function PktsCodeBlock({
  children,
  language = "code",
  onClickCopy = undefined,
  className,
  ...props
}: PktsCodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const _onCopy = onClickCopy
    ? () => onClickCopy(children)
    : async () => {
        await navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      };

  return (
    <pre className={clsx(styles.PktsCodeBlock, className)} {...props}>
      <div className={styles.top}>
        <span className={styles.chip}>{language}</span>
        <button className={styles.copyIconButton} onClick={() => _onCopy()}>
          {copied ? <Check /> : <Copy />}
        </button>
      </div>
      <code className={styles.code}>{children}</code>
    </pre>
  );
}

PktsCodeBlock.displayName = "PktsCodeBlock";

export default PktsCodeBlock;
