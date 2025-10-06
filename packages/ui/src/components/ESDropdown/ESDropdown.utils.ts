import { useEffect, RefObject, useState } from "react";

/**
 * Custom React hook that adds accessibility handling and open/close behavior to ESDropdown.
 *
 * - Opens popup on click, focus, or hover.
 * - Closes popup on escape press, or hover leave, click outside, and focus out of a non-descendant.
 *
 * @param ref - React ref object pointing to the popup wrapper element.
 */
function usePopupState(ref: RefObject<HTMLElement>, defaultOpen: boolean) {
  const [open, setOpen] = useState<0 | 1 | 2>(defaultOpen ? 2 : 0);

  const openDropdown = (level: typeof open) => {
    setOpen(level);
  };

  const closeDropdown = (level: typeof open) => {
    if (level >= open) setOpen(0);
  };

  // set a bunch of event listeners
  useEffect(() => {
    if (!ref.current) return;

    const handleMouseDown = (event: MouseEvent) => {
      if (!ref.current) return;
      if (ref.current.contains(event.target as Node)) {
        openDropdown(2);
      } else {
        closeDropdown(2);
      }
    };

    const handleFocusChange = (event: FocusEvent) => {
      if (!ref.current) return;
      const target = (event.target || document.activeElement) as Node | null;
      if (target && ref.current.contains(target)) {
        openDropdown(2);
      } else {
        closeDropdown(2);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDropdown(2);
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("focusin", handleFocusChange);
    document.addEventListener("keydown", handleKeyDown);

    const handleMouseEnter = () => {
      openDropdown(open > 1 ? open : 1);
    };

    const handleMouseLeave = (event: MouseEvent) => {
      if (!ref.current) return;
      const related = event.relatedTarget as Node | null;
      if (related && ref.current.contains(related)) return;

      closeDropdown(1);
    };

    ref.current.addEventListener("mouseenter", handleMouseEnter);
    ref.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("focusin", handleFocusChange);
      document.removeEventListener("keydown", handleKeyDown);

      if (ref.current) {
        ref.current.removeEventListener("mouseenter", handleMouseEnter);
        ref.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [ref, openDropdown, closeDropdown]);

  return [open > 0, (next: boolean) => (next ? setOpen(2) : setOpen(0))];
}

export default usePopupState;
