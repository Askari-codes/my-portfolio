import React, { useEffect, useRef } from "react";
import Home from "./Components/Pages/Home";
import AboutMe from "./Components/Pages/About-Me/AboutMe";
import WhatIDo from "./Components/Pages/WhatIDo/WhatIDo";
import Resume from "./Components/Pages/Resume";
import Testimonial from "./Components/Pages/Testimonial";
import Contact from "./Components/Pages/Contact";
import useAppContext from "./hooks/useAppContext";
import NavigationWrapper from "./Components/Navigation/NavigationWrapper";

function App() {
  const { isOpen, closeMenu, setIsScrolled,sectionRefs } = useAppContext();
  
  const scrollContainerRef = useRef(null);

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

  return (
    <div onClick={handleClick} className="relative w-full h-full">
      <div className="lg:grid lg:grid-cols-[250px_1fr] lg:h-screen w-full h-full">
        <NavigationWrapper sectionRefs={sectionRefs} /> 
        <main
          ref={scrollContainerRef}
          className="w-full h-screen overflow-x-hidden overflow-y-auto"
        >
          <section ref={sectionRefs.home} id="home" className="min-h-screen w-full">
            <Home />
          </section>
          <section ref={sectionRefs.aboutMe} id="aboutMe" className="">
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
