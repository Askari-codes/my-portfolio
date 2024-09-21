
import React, { useEffect, useState } from 'react';
import { menuItemsData } from '../../Data/Data';
import useAppContext from '../../hooks/useAppContext';

function Navigation({ type }) {
  const { closeMenu, sectionRefs,activeSection,setActiveSection,setIsHomeClicked } = useAppContext();
  
  const handleLinkClick = (section) => {
    
    if (section==='home') {
      setIsHomeClicked(true)
    }
    closeMenu();
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', `#${section}`);
  };

  // useEffect(() => {
  //   const observerOptions = {
  //     root: null, // Could use scrollContainerRef.current if needed
  //     rootMargin: '0px',
  //     threshold: 0.2,
  //   };
  
  //   const observer = new IntersectionObserver((entries) => {
  //     let maxIntersection = 0;
  //     let currentActive = '';
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting && entry.intersectionRatio > maxIntersection) {
  //         maxIntersection = entry.intersectionRatio;
  //         currentActive = entry.target.id;
  //       }
  //     });
  //     if (currentActive) {
  //       setActiveSection(currentActive);
  //       window.history.pushState(null, '', `#${currentActive}`);
  //     }
  //   }, observerOptions);
  
  //   Object.keys(sectionRefs).forEach((section) => {
  //     const element = sectionRefs[section]?.current;
  //     if (element) {
  //       observer.observe(element);
  //     }
  //   });
  
  //   return () => {
  //     Object.keys(sectionRefs).forEach((section) => {
  //       const element = sectionRefs[section]?.current;
  //       if (element) {
  //         observer.unobserve(element);
  //       }
  //     });
  //   };
  // }, [sectionRefs, setActiveSection]);
  

  return (
    <nav className="flex flex-col items-center mt-8 space-y-4">
      {menuItemsData.map((item, index) => (
        <button
          key={index}
          className={`w-full text-lg text-[--color-text-secondary] hover:text-[--color-text-primary] transition-colors duration-300 ${activeSection === item.path.replace('#', '')
              ? 'font-bold'
              : 'font-normal'
            }`}
          onClick={() => handleLinkClick(item.path.replace('#', ''))}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

export default Navigation;

