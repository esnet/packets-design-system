import React, { CSSProperties, useEffect } from "react";
import clsx from "clsx";
import styles from "./ESAccordion.module.css";
import { ESAccordionProps } from "./ESAccordion.types";
import useControllableState from "../../lib/hooks/useControllableState";
import ESIcon from "../ESIcon";

/**
 * ESAccordion Component
 *
 * @param {ESAccordionProps} props
 * @returns {React.ReactElement}
 */
export function ESAccordion({
  title,
  footer,
  variant = "primary",
  actionButtons,
  open: _open,
  onChange: _onOpenChange,
  children,
}: ESAccordionProps) {
  const [open, setOpen] = useControllableState({
    value: _open,
    defaultValue: _open ?? true,
    onChange: _onOpenChange,
  });
  // tools to make smooth transition
  const contentRef = React.useRef<HTMLDivElement>(null);
  const correctHeight = React.useRef(0);
  const [maxHeight, setMaxHeight] =
    React.useState<CSSProperties["maxHeight"]>("none");

  useEffect(() => {
    if (!contentRef.current) {
      return;
    }
    if (open) {
      setMaxHeight(contentRef.current.scrollHeight + 20);
    } else {
      setMaxHeight(0);
    }
  }, [open]);

  return (
    <div className={clsx(styles.ESAccordion, variant && styles[variant])}>
      <div className={styles.header}>
        <button
          aria-expanded={open}
          aria-controls={`accordion-content-${title}`}
          className={styles.openButton}
          onClick={() => {
            if (contentRef.current)
              setMaxHeight(contentRef.current.scrollHeight + 20);
            setOpen(!open);
          }}
        >
          <ESIcon name={open ? "chevron-down" : "chevron-right"} />
          <span>{title}</span>
        </button>
        {actionButtons && (
          <div className={styles.actionIconButtons}>{actionButtons}</div>
        )}
      </div>
      <div
        aria-labelledby={`accordion-header-${title}`}
        aria-hidden={!open}
        // @ts-expect-error
        inert={!open}
        ref={contentRef}
        style={{ maxHeight }}
        className={clsx(styles.content, !open && styles.closed)}
        onTransitionEnd={() => {
          if (open) setMaxHeight("none");
        }}
      >
        {children}
      </div>
      {footer && (
        <div className={styles.footer}>
          <span>{footer}</span>
        </div>
      )}
    </div>
  );
}

ESAccordion.displayName = "ESAccordion";

export default ESAccordion;
