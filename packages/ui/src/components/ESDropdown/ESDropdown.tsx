import React, { CSSProperties, useLayoutEffect } from "react";
import clsx from "clsx";
import styles from "./ESDropdown.module.css";
import { ESDropdownProps } from "./ESDropdown.types";
import { ESDropdownAnchor } from "./ESDropdownAnchor";
import ESDropdownContent from "./ESDropdownContent";
import usePopupState from "../../lib/hooks/usePopupState";

const CARAT_OFFSET = "8px";

/**
 * ESDropdown component.
 *
 * When uncontrolled, shows the dropdown when any descendant has been clicked or focus, and hiding it otherwise.
 *
 * Can also be controlled, able to have a open state forced on or off, with a change handler to receive when the dropdown would have been opened/closed.
 *
 * On open, automatically adjusts position based on position on page as to not clip off.
 */
export function ESDropdown({
  children,
  carat,
  mode = "both",
  className,
  ...props
}: ESDropdownProps) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState<any>({});

  const [open] = usePopupState(wrapperRef, false, mode);

  const [caratPosition, setCaratPosition] = React.useState<{
    left?: string;
    top?: string;
  }>({});

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

    if (carat) {
      if (yPos === "top") {
        next.bottom = `calc(100% + ${CARAT_OFFSET})`;
      } else {
        next.top = `calc(100% + ${CARAT_OFFSET})`;
      }
    }

    setPosition(next);

    setCaratPosition({
      left: `50%`,
      top:
        yPos === "bottom"
          ? `calc(100% + ${CARAT_OFFSET})`
          : `calc(0px - ${CARAT_OFFSET})`,
    });
  }, [open, carat]);

  const anchor = React.useMemo(() => {
    const el = React.Children.toArray(children).find(
      (child) => React.isValidElement(child) && child.type === ESDropdownAnchor
    ) as React.ReactElement | undefined;
    if (!el) return null;
    return el;
  }, [children]);

  const content = React.useMemo(() => {
    const el = React.Children.toArray(children).find(
      (child) => React.isValidElement(child) && child.type === ESDropdownContent
    ) as React.ReactElement | undefined;
    if (!el) return null;
    return el;
  }, [children]);

  // invalid state
  if (!anchor || !content) return null;

  return (
    <div
      {...props}
      ref={wrapperRef}
      className={clsx(styles.ESDropdown, className)}
    >
      {/* carat hover gap div */}
      {carat && (
        <div
          className={clsx(styles.hoverGap, styles.fade, open && styles.open)}
        />
      )}
      {/* anchor component */}
      <div
        {...anchor.props}
        className={clsx(styles.anchor, anchor.props.className)}
        aria-haspopup="true"
        aria-expanded={open}
      />
      {/* carat div */}
      {carat && (
        <div
          className={clsx(styles.carat, styles.fade, open && styles.open)}
          style={{
            left: caratPosition.left,
            top: caratPosition.top,
          }}
        />
      )}
      {/* dropdown content component */}
      <div
        {...content.props}
        style={{ ...content.props.style, ...position }}
        className={clsx(
          styles.content,
          styles.fade,
          open && styles.open,
          content.props.className
        )}
        ref={dropdownRef}
        aria-hidden={!open}
      />
    </div>
  );
}

ESDropdown.displayName = "ESDropdown";

export default ESDropdown;
