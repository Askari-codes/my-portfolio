import { useState, useEffect } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches); 

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleMediaChange = (event) => {
      setMatches(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);
    setMatches(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [query]); 

  return matches;
}

export default useMediaQuery;