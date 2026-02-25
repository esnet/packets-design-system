import React, { CSSProperties, useEffect } from "react";
import clsx from "clsx";
import styles from "./ESAccordion.module.css";
import { ESAccordionProps } from "./ESAccordion.types";
import useControllableState from "../../lib/hooks/useControllableState";
import { ChevronDown, ChevronRight } from "lucide-react";

// extra buffer to account for margin collapse
const HEIGHT_BUFFER = 20;

/**
 * ESAccordion Component
 *
 * @param {ESAccordionProps} props
 * @returns {React.ReactElement}
 */
export function ESAccordion({
  header,
  footer,
  variant = "primary",
  actionButtons,
  open: _open,
  onChange: _onOpenChange,
  className,
  children,
  ...props
}: ESAccordionProps) {
  const [open, setOpen] = useControllableState({
    value: _open,
    defaultValue: _open ?? true,
    onChange: _onOpenChange,
  });
  // tools to make smooth transition
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] =
    React.useState<CSSProperties["maxHeight"]>("none");

  useEffect(() => {
    if (!contentRef.current) {
      return;
    }
    if (open) {
      setMaxHeight(contentRef.current.scrollHeight + HEIGHT_BUFFER);
    } else {
      setMaxHeight(0);
    }
  }, [open]);

  return (
    <div
      className={clsx(
        styles.ESAccordion,
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
          onClick={() => {
            if (contentRef.current)
              setMaxHeight(contentRef.current.scrollHeight + HEIGHT_BUFFER);
            setOpen(!open);
          }}
        >
          {open ? <ChevronDown /> : <ChevronRight />}
          <span>{header}</span>
        </button>
        {actionButtons && (
          <div className={styles.actionIconButtons}>{actionButtons}</div>
        )}
      </div>
      <div
        aria-labelledby={`accordion-header-${header}`}
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
      {footer && variant !== "inline" && (
        <div className={clsx(styles.footer, !open && styles.closed)}>
          <span>{footer}</span>
        </div>
      )}
    </div>
  );
}

ESAccordion.displayName = "ESAccordion";

export default ESAccordion;
