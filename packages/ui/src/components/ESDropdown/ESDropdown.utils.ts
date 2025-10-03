import { useEffect, RefObject } from "react";

/**
 * Custom React hook that adds accessibility handling and open/close behavior to ESDropdown.
 *
 * - Opens dropdown on click, focus, or hover.
 * - Closes dropdown on click outside, focus outside, escape key, or hover leave (excluding descendants).
 *
 * @param ref - React ref object pointing to the dropdown wrapper element.
 * @param openDropdown - Function to call when dropdown should open.
 * @param closeDropdown - Function to call when dropdown should close.
 */
function useDropdownClick(
  ref: RefObject<HTMLElement>,
  openDropdown: () => void,
  closeDropdown: () => void
) {
  useEffect(() => {
    if (!ref.current) return;

    // ----- Document-wide events -----
    const handleMouseDown = (event: MouseEvent) => {
      if (!ref.current) return;
      if (ref.current.contains(event.target as Node)) {
        openDropdown();
      } else {
        closeDropdown();
      }
    };

    const handleFocusChange = (event: FocusEvent) => {
      if (!ref.current) return;
      const target = (event.target || document.activeElement) as Node | null;
      if (target && ref.current.contains(target)) {
        openDropdown();
      } else {
        closeDropdown();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDropdown();
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("focusin", handleFocusChange);
    document.addEventListener("keydown", handleKeyDown);

    const handleMouseEnter = () => {
      openDropdown();
    };

    const handleMouseLeave = (event: MouseEvent) => {
      if (!ref.current) return;
      const related = event.relatedTarget as Node | null;
      if (related && ref.current.contains(related)) return;

      closeDropdown();
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
}

export default useDropdownClick;
