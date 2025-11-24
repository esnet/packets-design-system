/* eslint-disable no-unused-vars */
import { useEffect, RefObject, useState, useRef, useCallback } from "react";

// 0 represents not opened, 1 represents opened due to hover/focus, 2 represents open due to click, which supercedes hovering
type OpenType = 0 | 1 | 2;

/**
 * Custom React hook that adds accessibility handling and open/close behavior to ESDropdown.
 *
 * - Opens popup on click, focus, or hover.
 * - Closes popup on escape press, or hover leave, click outside, and focus out of a non-descendant.
 *
 * @param ref - React ref object pointing to the popup wrapper element.
 */
function usePopupState(
  ref: RefObject<HTMLElement>,
  defaultOpen: boolean,
  mode: "hover" | "active" | "both"
): [boolean, (next: boolean) => void] {
  const [open, setOpen] = useState<OpenType>(defaultOpen ? 2 : 0);
  const elementRef = useRef<HTMLElement | null>(null);
  const openRef = useRef(open);

  // prevent stale closures from the passed in ref or the open state in the event listener
  useEffect(() => {
    elementRef.current = ref.current;
    openRef.current = open;
  });

  const openDropdown = useCallback((level: OpenType) => {
    setOpen(level);
  }, []);

  const closeDropdown = useCallback((level: OpenType) => {
    setOpen((current) => (level >= current ? 0 : current));
  }, []);

  useEffect(() => {
    const shouldListenActive = mode === "active" || mode === "both";
    const shouldListenHover = mode === "hover" || mode === "both";

    const handleMouseDown = (event: MouseEvent) => {
      if (!elementRef.current) return;
      if (elementRef.current.contains(event.target as Node)) {
        openDropdown(2);
      } else {
        closeDropdown(2);
      }
    };

    const handleFocusChange = (event: FocusEvent) => {
      if (!elementRef.current) return;
      const target = (event.target || document.activeElement) as Node | null;
      if (target && elementRef.current.contains(target)) {
        openDropdown(2);
      } else {
        closeDropdown(2);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDropdown(2);
    };

    const handleMouseEnter = (event: MouseEvent) => {
      if (!elementRef.current) return;
      if (!elementRef.current.contains(event.target as Node)) return;
      openDropdown(openRef.current > 1 ? openRef.current : 1);
    };

    const handleMouseLeave = (event: MouseEvent) => {
      if (!elementRef.current) return;
      if (!elementRef.current.contains(event.target as Node)) return;
      const related = event.relatedTarget as Node | null;
      if (related && elementRef.current.contains(related)) return;

      closeDropdown(1);
    };

    if (shouldListenActive) {
      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("focusin", handleFocusChange);
      document.addEventListener("keydown", handleKeyDown);
    }

    if (shouldListenHover) {
      document.addEventListener("mouseenter", handleMouseEnter, true);
      document.addEventListener("mouseleave", handleMouseLeave, true);
    }

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("focusin", handleFocusChange);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, [mode]);

  return [open > 0, (next: boolean) => (next ? setOpen(2) : setOpen(0))];
}

export default usePopupState;
