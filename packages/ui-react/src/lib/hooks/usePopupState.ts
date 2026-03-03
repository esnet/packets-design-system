/* eslint-disable no-unused-vars */
import { useEffect, RefObject, useState, useRef, useCallback } from "react";
import { ESNET_TIME_DURATION_MEDIUM } from "@esnet/esnet-tokens";

// 0 represents not opened, 1 represents opened due to hover/focus, 2 represents open due to click, which supercedes hovering
type OpenType = 0 | 1 | 2;

// the amount of time the popup stays open for after hovering
const persistDuration = parseInt(ESNET_TIME_DURATION_MEDIUM);

/**
 * Custom React hook that adds accessibility handling and open/close behavior to components with an anchor and popup.
 *
 * - Opens popup on click, focus, or hover.
 * - Closes popup on escape press, or hover leave, click outside, and focus out of a non-descendant.
 *
 * @param ref - React ref object pointing to the popup wrapper element.
 */
function usePopupState(
  anchorRef: RefObject<HTMLElement>,
  popupRef: RefObject<HTMLElement>,
  defaultOpen: boolean = false,
  mode: "hover" | "active" | "both" = "both"
): [boolean, (next: boolean) => void] {
  // The wanted behavior is when the popup is clicked, it stays open, even when the user hovers off of it
  // This state is only managed internally, users of this hook can only set open on click/focus and closed, not the open on hover
  const [open, setOpen] = useState<OpenType>(defaultOpen ? 2 : 0);

  // Store ref in mutable ref to avoid stale closures
  const _anchorRef = useRef<HTMLElement | null>(null);
  const _popupRef = useRef<HTMLElement | null>(null);
  const openRef = useRef(open);

  useEffect(() => {
    _anchorRef.current = anchorRef.current;
    _popupRef.current = popupRef.current;
    openRef.current = open;
  });

  // during the brief period in which the user may hover out of the wrapper
  // when going from the anchor to the popup, the popup may disappear
  // persist the popup for a slight amount to ensure it doesn't jarringly disappear
  // reference to the timeout ID is needed to clear it later
  const timerRef = useRef<any>(null);

  const openPopup = useCallback((level: OpenType) => {
    // openPopup occurs when the user hovers on any part
    // so cancel the close timer and make it available to be closed
    clearTimeout(timerRef.current);
    timerRef.current = null;
    setOpen(level);
  }, []);

  const closePopup = useCallback((level: OpenType) => {
    // closePopup is called after the timeout is up, so clear it now
    clearTimeout(timerRef.current);
    setOpen((prev) => {
      // only close it if the level of the close exceeds the current open level
      return level >= prev ? 0 : prev;
    });
  }, []);

  useEffect(() => {
    const containsTarget = (target: Node | null) =>
      (_anchorRef.current && _anchorRef.current?.contains(target)) ||
      (_popupRef.current && _popupRef.current?.contains(target));

    const shouldListenActive = mode === "active" || mode === "both";
    const shouldListenHover = mode === "hover" || mode === "both";

    const handleMouseDown = (event: MouseEvent) => {
      if (containsTarget(event.target as Node)) {
        openPopup(2);
      } else {
        closePopup(2);
      }
    };

    const handleFocusChange = (event: FocusEvent) => {
      const target = (event.target || document.activeElement) as Node | null;
      if (containsTarget(target)) {
        openPopup(2);
      } else {
        closePopup(2);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePopup(2);
    };

    const handleMouseEnter = (event: MouseEvent) => {
      if (!containsTarget(event.target as Node)) return;
      if (containsTarget(event.relatedTarget as Node)) return;

      openPopup(openRef.current > 1 ? openRef.current : 1);
    };

    const handleMouseLeave = (event: MouseEvent) => {
      if (!containsTarget(event.target as Node)) return;
      if (containsTarget(event.relatedTarget as Node)) return;

      // could be optimized by checking if the level >= 1 before timeout
      // but would require including the level in the dependency array. may explore later
      if (!timerRef.current)
        timerRef.current = setTimeout(() => closePopup(1), persistDuration);
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
      clearTimeout(timerRef.current);
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
