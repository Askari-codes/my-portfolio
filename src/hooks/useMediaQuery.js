import { useState, useEffect } from "react";

function useMediaQuery(query) {
  const [mathes, setMathes] = useState(window.matchMedia(query).matches);
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleMediaChange = (event) => {
      setMathes(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  });
  return mathes;
}

export default useMediaQuery;
