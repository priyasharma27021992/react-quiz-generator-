import { RefObject, useEffect, useRef } from "react";

export default function useFocus<T extends HTMLElement>(): RefObject<T> {
  const inputRef = useRef<T>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return inputRef;
}
