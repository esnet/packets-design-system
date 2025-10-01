import { useEffect, RefObject } from "react";

/**
 * Custom React hook that adds accessibility handling and open/close behavior to ESDropdown.
 *
 * @param ref - React ref object pointing to the element to detect outside clicks for.
 * @param callback - Function to call when an outside click is detected.
 */
function useDropdownClick(
  ref: RefObject<HTMLElement>,
  openDropdown: () => void,
  closeDropdown: () => void
) {
  useEffect(() => {
    function handleMouseDown(event: MouseEvent) {
      if (!ref.current) return;
      if (ref.current.contains(event.target as Node)) {
        openDropdown();
      } else {
        closeDropdown();
      }
    }

    function handleFocusChange(event: FocusEvent) {
      if (!ref.current) return;
      // focusin gives the *new* active element
      const target = (event.target || document.activeElement) as Node | null;
      if (target && ref.current.contains(target)) {
        openDropdown();
      } else {
        closeDropdown();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeDropdown();
      }
    }

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("focusin", handleFocusChange);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("focusin", handleFocusChange);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ref, openDropdown, closeDropdown]);
}

export default useDropdownClick;
