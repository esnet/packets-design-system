import { useEffect, RefObject } from "react";

/**
 * useOutsideClick
 *
 * Custom React hook that triggers a callback when a click occurs outside the referenced element.
 *
 * @param ref - React ref object pointing to the element to detect outside clicks for.
 * @param callback - Function to call when an outside click is detected.
 */
function useOutsideClick(
  ref: RefObject<HTMLElement>,
  callback: (event: MouseEvent) => void,
): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export default useOutsideClick;
