import React, { useEffect, useState } from 'react';
import { menuItemsData } from '../../Data/Data';
import useAppContext from '../../hooks/useAppContext';

function Navigation({ type }) {
  const { closeMenu, sectionRefs } = useAppContext();
  const [activeSection, setActiveSection] = useState('');
  useEffect(()=>{
console.log('active section',activeSection);

  },[activeSection])

  const handleLinkClick = (section) => {
    closeMenu();
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', `#${section}`);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      let maxIntersection = 0;
      let currentActive = '';
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > maxIntersection) {
          maxIntersection = entry.intersectionRatio;
          currentActive = entry.target.id;
        }
      });
      if (currentActive) {
        setActiveSection(currentActive);
        window.history.pushState(null,'',`#${currentActive}`)
      }
    }, observerOptions);

    Object.keys(sectionRefs).forEach(section => {
      const element = sectionRefs[section]?.current;
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      Object.keys(sectionRefs).forEach(section => {
        const element = sectionRefs[section]?.current;
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionRefs]);

  return (
    <div className={type === 'header' ? 'flex flex-col w-full items-start justify-start lg:hidden' : 'flex flex-col w-full h-[60%] justify-center'}>
      {menuItemsData.map((item, index) => (
        <button
          key={index}
          className={`w-full py-4 px-2 text-xl ${type === 'header' ? 'justify-start p-4' : 'justify-center hover:text-[1.4rem]  '} 
            ${activeSection === item.path.replace('#', '') ? 'text-[var(--color-highlight)] font-bold'  : 'text-[var(--color-light-gray)]'}
            transition-colors duration-300 ease-in-out
             hover:bg-[var(--bg-hover)] `}
          onClick={() => handleLinkClick(item.path.replace('#', ''))}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default Navigation;

