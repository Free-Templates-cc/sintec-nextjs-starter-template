import { useEffect } from "react";

const useVerticalScrollEvent = (callback: any) => {
  useEffect(() => {
    window.addEventListener("scroll", callback);
    return () => {
      window.removeEventListener("scroll", callback);
    };
  }, [callback]);
};

export default useVerticalScrollEvent;