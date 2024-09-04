import React, { useState,useRef } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState('/');

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);
    const updatePath = (path) => setCurrentPath(path);
    const [isScrolled, setIsScrolled] = useState(false);

    const sectionRefs = {
        home: useRef(null),
        aboutMe: useRef(null),
        whatIDo: useRef(null),
        resume: useRef(null),
        testimonial: useRef(null),
        contact: useRef(null),
      };
    

    return (
        <AppContext.Provider value={{ isOpen,setIsOpen, toggleMenu, closeMenu, updatePath,isScrolled,setIsScrolled,sectionRefs }}>
            {children}  
        </AppContext.Provider>
    );
}

export default AppProvider;