import React, { useEffect, useRef, useState } from "react";
import Home from "./Components/Pages/Home";
import AboutMe from "./Components/Pages/About-Me/AboutMe";
import WhatIDo from "./Components/Pages/WhatIDo/WhatIDo";
import Resume from "./Components/Pages/Resume/Resume";
import Testimonial from "./Components/Pages/Testimonial/Testimonial";
import Contact from "./Components/Pages/Contact/Contact";
import useAppContext from "./hooks/useAppContext";
import NavigationWrapper from "./Components/Navigation/NavigationWrapper";

function App() {
  const { isOpen, closeMenu, setIsScrolled,sectionRefs,activeSection,setActiveSection,isHomeClicked,setIsHomeClicked } = useAppContext();

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    console.log('active section',activeSection);
    
  }, [activeSection]);

  useEffect(() => {
    if (activeSection === 'home' && isHomeClicked) {
      setIsHomeClicked(false);
    }
  }, [activeSection, isHomeClicked, setIsHomeClicked]);

  useEffect(() => {
    const observerOptions = {
      root: scrollContainerRef.current, // Use the scroll container as the root
      rootMargin: !isHomeClicked?'500px':'0px',
      threshold: 1, 
    };
   

    const observerCallback = (entries) => {
      let maxRatio = 0;
      let visibleSection = activeSection; // Default to current activeSection
    
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          visibleSection = entry.target.id;
        }
      });
    
      if (visibleSection !== activeSection) {
        setActiveSection(visibleSection);
        // Update the URL without adding a new entry to the history
        window.history.replaceState(null, '', `#${visibleSection}`);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        // console.log('ref if',ref,'ref current is',ref.current);
        
        observer.observe(ref.current);
        // console.log(`Observing section: ${ref.current.id}`); // Debug log
      }
    });

    return () => {
      // Unobserve all sections on cleanup
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
          // console.log(`Unobserving section: ${ref.current.id}`); // Debug log
        }
      });
    };
  }, [sectionRefs])

  useEffect(() => {
    // console.log('avtive section',activeSection);
    
  }, [activeSection]);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollTop = scrollContainerRef.current.scrollTop;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleClick = () => {
    if (isOpen) {
      closeMenu();
    }
  };
  useEffect(() => {
    // console.log('section ref',sectionRefs);
    
  }, [sectionRefs]);
  // lg:grid lg:grid-cols-[250px_1fr] lg:h-screen w-full h-full
  return (
    <div onClick={handleClick} className="relative w-full bg-[--color-background] h-screen ">
            <div className={`${activeSection==='home'?'':'lg:grid lg:grid-cols-[250px_1fr] lg:h-full w-full h-full'}`}>
      { activeSection==='home'?null:<NavigationWrapper sectionRefs={sectionRefs} /> }
        <main
          ref={scrollContainerRef}
          className="w-full h-screen overflow-x-hidden overflow-y-auto"
        >
          <section ref={sectionRefs.home} id="home" className="min-h-screen w-full">
            <Home />
          </section>
          <section ref={sectionRefs.aboutMe} id="aboutMe" className="min-h-screen w-full">
            <AboutMe />
          </section>
          <section ref={sectionRefs.whatIDo} id="whatIDo" className="min-h-screen w-full">
            <WhatIDo />
          </section>
          <section ref={sectionRefs.resume} id="resume" className="min-h-screen w-full">
            <Resume />
          </section>
          <section ref={sectionRefs.testimonial} id="testimonial" className="min-h-screen w-full">
            <Testimonial />
          </section>
          <section ref={sectionRefs.contact} id="contact" className="min-h-screen w-full">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
