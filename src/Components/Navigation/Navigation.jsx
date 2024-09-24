import React,{useEffect} from "react";
import { menuItemsData } from "../../Data/Data";
import useAppContext from "../../hooks/useAppContext";
import { navigationConfig } from "../../Layout/layout";

function Navigation({type}) {
  useEffect(() => {
    console.log('type',type);
    
  }, [type]);
  const { closeMenu, sectionRefs, activeSection } = useAppContext();
  const scrollContainerRef = document.querySelector("main");

  const smoothScrollTo = (targetPosition, duration = 500) => {
    const startPosition = scrollContainerRef.scrollTop;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      scrollContainerRef.scrollTop = run;
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  };

  const handleLinkClick = (section) => {
   
    closeMenu();
    const targetPosition = sectionRefs[section]?.current?.offsetTop || 0;
    smoothScrollTo(targetPosition, 1000); // Adjust duration as needed
    window.history.pushState(null, "", `#${section}`);
  };

  return (
    <nav className={`flex flex-col items-center ${type===navigationConfig.mobile?'  mt-0  ':'mt-8'}`}>
      {menuItemsData.map((item, index) => (
        <button
          key={index}
          className={`w-full text-lg text-[--color-text-secondary] hover:text-[--color-text-primary] transition-colors duration-300 ${
            activeSection === item.path.replace("#", "")
              ? "font-bold bg-[var(--color-blue-200)] text-[var(--color-text-primary)] hover:bg-[var(--color-blue-500)] "
              : "font-normal"
          }
          ${type===navigationConfig.mobile?'flex  px-4 py-2 bg-[var(--color-background)] text-[var(--color-blue-500)] border-[1px] font-semibold hover:text-[--color-blue-200] ':''}
          `
        
        }
          onClick={() => handleLinkClick(item.path.replace("#", ""))}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

export default Navigation;
