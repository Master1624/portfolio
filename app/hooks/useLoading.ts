import { useEffect, useRef, useState } from "react";
import { useNavigation } from "react-router";

export function useLoading(minTime: number = 1000): boolean {
  const navigation = useNavigation();
  const [showLoader, setShowLoader] = useState(false);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (navigation.state === "loading") {
      setShowLoader(true);
      startTimeRef.current = Date.now();
    }

    if (navigation.state === "idle" && showLoader) {
      const elapsed = Date.now() - (startTimeRef.current ?? 0);

      if (elapsed >= minTime) {
        setShowLoader(false);
      } else {
        const remaining = minTime - elapsed;
        const timeout = setTimeout(() => {
          setShowLoader(false);
        }, remaining);

        return () => clearTimeout(timeout);
      }
    }
  }, [navigation.state, minTime, showLoader]);

  return showLoader;
}
