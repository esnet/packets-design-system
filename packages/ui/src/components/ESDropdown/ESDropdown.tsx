import React from "react";
import clsx from "clsx";
import styles from "./ESDropdown.module.css";
import { ESDropdownProps } from "./ESDropdown.types";
import { ESDropdownAnchor } from ".";
import ESDropdownContent from "./ESDropdownContent";
import useDropdownUtils from "./ESDropdown.utils";
import useControllableState from "../../lib/hooks/useControllableState";

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
  ...props
}: ESDropdownProps) {
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

  const dropdownWrapperRef = React.useRef<HTMLDivElement>(null);
  useDropdownUtils(dropdownWrapperRef, openDropdown, closeDropdown);

  const trigger = React.useMemo(() => {
    const el = React.Children.toArray(children).find(
      (child) => React.isValidElement(child) && child.type === ESDropdownAnchor
    ) as React.ReactElement | undefined;
    if (!el) return null;

    return React.cloneElement(el, {
      className: clsx(styles.trigger, el.props.className),
    });
  }, [children]);

  const content = React.useMemo(() => {
    const el = React.Children.toArray(children).find(
      (child) => React.isValidElement(child) && child.type === ESDropdownContent
    ) as React.ReactElement | undefined;
    if (!el) return null;

    return React.cloneElement(el, {
      className: clsx(styles.content, el.props.className),
    });
  }, [children]);

  // invalid state
  if (!trigger || !content) return null;

  return (
    <div
      {...props}
      ref={dropdownWrapperRef}
      className={clsx(styles.ESDropdown)}
    >
      {trigger}
      {open && content}
    </div>
  );
}

ESDropdown.displayName = "ESDropdown";

export default ESDropdown;
