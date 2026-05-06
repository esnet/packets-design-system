import React, { useLayoutEffect, useRef, useState } from "react";
import clsx from "clsx";
import { PktsDropdownProps } from "./PktsDropdown.types";
import usePopupState from "../../lib/hooks/usePopupState";

const CARET_OFFSET = "8px";

/**
 * Dropdown component.
 *
 * When uncontrolled, shows the dropdown when any descendant has been clicked or focus, and hiding it otherwise.
 *
 * Can also be controlled, able to have a open state forced on or off, with a change handler to receive when the dropdown would have been opened/closed.
 *
 * On open, automatically adjusts position based on position on page as to not clip off.
 */
export function PktsDropdown({
  anchor,
  children,
  caret,
  mode = "both",
  className,
  ...props
}: PktsDropdownProps) {
  const anchorRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<any>({});

  const [open] = usePopupState(anchorRef, dropdownRef, false, mode);

  const [caretPosition, setCaretPosition] = useState<{
    left?: string;
    top?: string;
  }>({});

  // TODO: refactor to utilize CSS anchor() instead of calculating
  useLayoutEffect(() => {
    if (!dropdownRef.current) return;

    // default setting
    let next: any = {
      top: "100%",
      left: "50%",
      bottom: "auto",
      transform: "translateX(-50%)",
    };

    if (!open) {
      setPosition(next);
      return;
    }

    const dropdownRect = dropdownRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let yPos: "top" | "bottom" =
      dropdownRect.bottom > viewportHeight ? "top" : "bottom";

    if (dropdownRect.right > viewportWidth) {
      next.left = "auto";
      next.right = "0";
      next.transform = "";
    } else if (dropdownRect.left < 0) {
      next.left = "0";
      next.right = "auto";
      next.transform = "";
    }

    if (yPos === "top") {
      next.top = "auto";
      next.bottom = "100%";
    } else {
      next.top = "100%";
      next.bottom = "auto";
    }

    if (caret) {
      if (yPos === "top") {
        next.bottom = `calc(100% + ${CARET_OFFSET})`;
      } else {
        next.top = `calc(100% + ${CARET_OFFSET})`;
      }
    }

    setPosition(next);
    setCaretPosition({
      left: `50%`,
      top:
        yPos === "bottom"
          ? `calc(100% + ${CARET_OFFSET})`
          : `calc(0px - ${CARET_OFFSET})`,
    });
  }, [open, caret]);

  return (
    <div {...props} className={clsx("pkts-dropdown", className)}>
      <div
        ref={anchorRef}
        className="contents"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {anchor}
      </div>
      {caret && (
        <div
          className={clsx("pkts-dropdown-caret", !open && "pkts-hidden")}
          style={{
            left: caretPosition.left,
            top: caretPosition.top,
          }}
        />
      )}
      <div
        style={{ ...position }}
        className={clsx("pkts-dropdown-content", !open && "pkts-hidden")}
        ref={dropdownRef}
        aria-hidden={!open}
      >
        {children}
      </div>
    </div>
  );
}

PktsDropdown.displayName = "PktsDropdown";

export default PktsDropdown;
