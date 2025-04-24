import React, { useEffect, useRef, useCallback } from "react";
import useAppContext from "./hooks/useAppContext";
import NavigationWrapper from "./Components/Navigation/NavigationWrapper";
import { sections,sectionNames } from "./Data/Data";
import { SCROLL_OFFSET,SCROLL_THRESHOLD } from "./Layout/layout";
import clsx from "clsx";

function App() {
  const {
    isOpen,
    closeMenu,
    sectionRefs,
    activeSection,
    setActiveSection,
    scrollContainerRef,
  } = useAppContext();


  const sectionPositions = useRef({});


  const updateSectionPositions = useCallback(() => {
    const positions = {};
    sections.forEach(({ id }) => {
      if (sectionRefs[id]?.current) {
        positions[id] = sectionRefs[id].current.offsetTop;
      }
    });
    sectionPositions.current = positions;
  }, [ sectionRefs]);

  
  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current || !sectionPositions.current) return;
  
    const scrollContainer = scrollContainerRef.current;
    const scrollPosition = scrollContainer.scrollTop;
    const containerHeight = scrollContainer.clientHeight;
    const scrollHeight = scrollContainer.scrollHeight;
    let currentSection = sectionNames.HOME;
  
    if (scrollPosition + containerHeight >= scrollHeight - SCROLL_THRESHOLD) {
      currentSection = sectionNames.CONTACT;
    } else {
      for (let i = sections.length - 1; i >= 0; i--) {
        const { id } = sections[i];
        const position = sectionPositions.current[id] || 0;
        if (scrollPosition >= position - SCROLL_OFFSET) {
          currentSection = id;
          break;
        }
      }
    }
  
    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
      window.history.replaceState(null, "", `#${currentSection}`);
    }
  }, [activeSection, scrollContainerRef, sectionPositions, setActiveSection]);
  

  const handleClick = useCallback(() => {
    if (isOpen) {
      closeMenu();
    }
  }, [isOpen, closeMenu]);

  
  useEffect(() => {
    updateSectionPositions();

  }, [updateSectionPositions]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll, scrollContainerRef]);

  useEffect(() => {
      setActiveSection(sectionNames.HOME);
      window.history.replaceState(null, "", `#${sectionNames.HOME}`);
  },[setActiveSection]);
 
  return (
    <div
    
      onClick={handleClick}
      className=
        'relative w-full h-screen bg-[--background-application] dark:dark '
        
      
    >
    
      <div className="w-frll h-full lg:grid lg:h-full lg:grid-cols-[250px_1fr]">
        <NavigationWrapper
          sectionRefs={sectionRefs}
          isVisible={activeSection !== sectionNames.HOME}
        />

        <main
          ref={scrollContainerRef}
          className={clsx(
            "w-full h-screen overflow-x-hidden overflow-y-auto",
            {
              "col-span-2": activeSection === sectionNames.HOME,
            }
          )}
        >
          {sections.map(({ id, component: Component }) => (
            <section 
              key={id}
              ref={sectionRefs[id]}
              id={id}
              className="w-full bg-backgroundImage "
            >
              <Component />
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
