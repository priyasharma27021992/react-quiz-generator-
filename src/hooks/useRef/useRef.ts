import { RefObject, useEffect, useRef } from "react";

export default function useFocus<T extends HTMLElement>(
  focusedCondition: boolean
): RefObject<T> {
  const inputRef = useRef<T>(null);
  useEffect(() => {
    if (focusedCondition) inputRef.current?.focus();
  }, [focusedCondition]);

  return inputRef;
}
