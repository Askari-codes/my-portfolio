import React from "react";
import Home from "./Components/Pages/Home";
import AboutMe from "./Components/Pages/AboutMe";
import WhatIDo from "./Components/Pages/WhatIDo";
import Resume from "./Components/Pages/Resume";
import Testimonial from "./Components/Pages/Testimonial";
import Contact from "./Components/Pages/Contact";
import useAppContext from "./hooks/useAppContext";
import NavigationWrapper from "./Components/Navigation/NavigationWrapper";

function App() {
  const { isOpen, closeMenu } = useAppContext();

  const handleClick = () => {
    if (isOpen) {
      closeMenu();
    }
  };

  return (
    <div onClick={handleClick} className="relative w-full h-full">
      <div className="lg:grid lg:grid-cols-[250px_1fr] lg:h-screen w-full h-full">
        <NavigationWrapper />
        <main className="w-full h-full overflow-x-hidden overflow-y-auto">
          <section id="home" className="min-h-screen w-full">
            <Home />
          </section>
          <section id="about-me" className="min-h-screen w-full">
            <AboutMe />
          </section>
          <section id="what-i-do" className="min-h-screen w-full">
            <WhatIDo />
          </section>
          <section id="resume" className="min-h-screen w-full">
            <Resume />
          </section>
          <section id="testimonial" className="min-h-screen w-full">
            <Testimonial />
          </section>
          <section id="contact" className="min-h-screen w-full">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
