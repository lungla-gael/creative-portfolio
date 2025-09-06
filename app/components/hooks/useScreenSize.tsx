"use client";
import { useEffect, useState } from "react";

const useScreenSize = (): number | undefined => {
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);

  useEffect(() => {
    function getScreenSize(): number {
      return window.innerWidth;
    }

    function handleResize() {
      // call the function and pass the number result to setScreenSize
      setScreenSize(getScreenSize());
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;
