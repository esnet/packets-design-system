import React, { CSSProperties, useLayoutEffect } from "react";
import clsx from "clsx";
import styles from "./ESDropdown.module.css";
import { ESDropdownProps } from "./ESDropdown.types";
import { ESDropdownAnchor } from ".";
import ESDropdownContent from "./ESDropdownContent";
import useDropdownUtils from "./ESDropdown.utils";
import useControllableState from "../../lib/hooks/useControllableState";

const CARAT_OFFSET = "8px";

/**
 * ESDropdown component.
 *
 * When uncontrolled, shows the dropdown when any descendant has been clicked or focus, and hiding it otherwise.
 *
 * Can also be controlled, able to have a open state forced on or off, with a change handler to receive when the dropdown would have been opened/closed.
 *
 * Automatically adjusts position based on position on page as to not clip off.
 *
 *
 * TODO: add carat, add not clip off thing
 *
 */
export function ESDropdown({
  children,
  open: _open,
  onOpenChange,
  carat,
  ...props
}: ESDropdownProps) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState<{
    left?: CSSProperties["left"];
    right?: CSSProperties["right"];
    top?: CSSProperties["top"];
    bottom?: CSSProperties["bottom"];
  }>({});

  const [open, setOpen] = useControllableState({
    value: _open,
    defaultValue: false,
    onChange: onOpenChange,
  });
  const openDropdown = () => {
    if (!open) setOpen(true);
  };
  const closeDropdown = () => {
    if (open) setOpen(false);
  };

  const [caratPosition, setCaratPosition] = React.useState<{
    left?: string;
    top?: string;
  }>({});

  useLayoutEffect(() => {
    if (!dropdownRef.current || !anchorRef.current) return;

    // default setting
    let next = {
      top: "100%",
      left: "0",
      right: "auto",
      bottom: "auto",
    };

    const dropdownRect = dropdownRef.current.getBoundingClientRect();
    const anchorRect = anchorRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let xPos: "left" | "right" =
      dropdownRect.right > viewportWidth ? "right" : "left";
    let yPos: "top" | "bottom" =
      dropdownRect.bottom > viewportHeight ? "top" : "bottom";

    if (!open) {
      setPosition(next);
      return;
    }

    if (xPos === "right") {
      next.left = "auto";
      next.right = "0";
    } else {
      next.left = "0";
      next.right = "auto";
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

    const anchorCenterX =
      anchorRect.left + anchorRect.width / 2 - dropdownRect.left;

    setCaratPosition({
      left: `${anchorCenterX}px`,
      top:
        yPos === "bottom"
          ? `calc(100% + ${CARAT_OFFSET})`
          : `calc(0px - ${CARAT_OFFSET})`,
    });
  }, [open, carat]);

  useDropdownUtils(wrapperRef, openDropdown, closeDropdown);

  const trigger = React.useMemo(() => {
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
  if (!trigger || !content) return null;

  return (
    <div {...props} ref={wrapperRef} className={clsx(styles.ESDropdown)}>
      <div
        {...trigger.props}
        className={clsx(trigger.props.className, styles.trigger)}
        ref={anchorRef}
      />
      {carat && open && (
        <div
          className={clsx(styles.carat)}
          style={{
            left: caratPosition.left,
            top: caratPosition.top,
          }}
        />
      )}
      <div
        {...content.props}
        style={{ ...content.props.styles, ...position }}
        className={clsx(
          content.props.className,
          styles.content,
          !open && styles.hidden
        )}
        ref={dropdownRef}
      />
    </div>
  );
}

ESDropdown.displayName = "ESDropdown";

export default ESDropdown;
