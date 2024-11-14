import React, { useState, useRef} from 'react';
import AppContext from './AppContext';
import {sections} from '../../Data/Data'

function AppProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [isHomeClicked, setIsHomeClicked] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isDarkMode,setIsDarkMode] = useState(true)

  const scrollContainerRef = useRef(null);

  const sectionRefs = {
    home: useRef(null),
    aboutMe: useRef(null),
    whatIDo: useRef(null),
    resume: useRef(null),
    portfolio:useRef(null),
    testimonial: useRef(null),
    contact: useRef(null),
  };

  const toggleMenu = ()=>{
    setIsOpen((prev) => !prev);
  }
  const closeMenu = () => setIsOpen(false);

  return (
    <AppContext.Provider
      value={{
        isOpen,
        setIsOpen,
        toggleMenu,
        closeMenu,
        sectionRefs,
        activeSection,
        setActiveSection,
        isHomeClicked,
        setIsHomeClicked,
        isScrolling,
        setIsScrolling,
        scrollContainerRef, 
        isDarkMode,
        setIsDarkMode
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
