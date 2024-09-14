import { useState, useEffect } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches); // Fix typo from "mathes" to "matches"

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleMediaChange = (event) => {
      setMatches(event.matches);
    };

    // Add event listener
    mediaQuery.addEventListener("change", handleMediaChange);

    // Check on mount
    setMatches(mediaQuery.matches);

    // Cleanup event listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [query]); // Add query as a dependency to run when query changes

  return matches;
}

export default useMediaQuery;