import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./PktsAccordion.module.css";
import { PktsAccordionProps } from "./PktsAccordion.types";
import { ChevronDown, ChevronRight } from "lucide-react";

export function PktsAccordion({
  header,
  footer,
  variant = "primary",
  actionButtons,
  open: _open,
  className,
  children,
  ...props
}: PktsAccordionProps) {
  const [open, setOpen] = useState(_open ?? true);

  // Keep internal state in sync if the parent changes the 'open' prop
  useEffect(() => {
    if (_open !== undefined) {
      setOpen(_open);
    }
  }, [_open]);

  return (
    <div
      className={clsx(
        styles.PktsAccordion,
        variant && styles[variant],
        className,
      )}
      {...props}
    >
      <div className={styles.header}>
        <button
          aria-expanded={open}
          aria-controls={`accordion-content-${header}`}
          className={styles.openButton}
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronDown /> : <ChevronRight />}
          {header}
        </button>
        {actionButtons && (
          <div className={styles.actionIconButtons}>{actionButtons}</div>
        )}
      </div>

      <div
        id={`accordion-content-${header}`}
        aria-labelledby={`accordion-header-${header}`}
        className={clsx(styles.content, !open && styles.hidden)}
      >
        {children}
      </div>

      {footer && variant !== "inline" && (
        <div className={styles.footer}>
          <span>{footer === true ? "" : footer}</span>
        </div>
      )}
    </div>
  );
}

PktsAccordion.displayName = "PktsAccordion";
export default PktsAccordion;
