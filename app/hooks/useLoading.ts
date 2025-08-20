import { useEffect, useRef, useState } from "react";

export function useLoading(minTime: number = 1000): [boolean, () => void] {
  const [showLoader, setShowLoader] = useState(false);
  const startTimeRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const clearExistingTimeout = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const triggerLoading = () => {
    clearExistingTimeout();
    setShowLoader(true);
    startTimeRef.current = Date.now();

    timeoutRef.current = window.setTimeout(() => {
      setShowLoader(false);
      timeoutRef.current = null;
    }, minTime);
  };

  useEffect(() => {
    return () => {
      clearExistingTimeout();
    };
  }, []);

  return [showLoader, triggerLoading];
}
