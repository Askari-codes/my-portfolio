import React,{useState} from 'react';
import { GiBarbedSun } from "react-icons/gi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import clsx from 'clsx';
import {navigationConfig} from '../../Layout/layout'

function NightModeFAB({type}) {
  
  const [isDarkMode,setIsDarkMode] = useState(()=>document.documentElement.classList.contains('dark'))
 
  const toggleNightMode = () => {
    const html=document.documentElement
    const isDark=html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setIsDarkMode(isDark)
    
  };
  
  
  return (
    <button
      onClick={toggleNightMode}
      className={clsx(
        {'fixed top-2 left-2  z-50  transition-colors duration-300':type===navigationConfig.desktop},
        {'':type===navigationConfig.mobile}
      )}
    >
      {isDarkMode ? <GiBarbedSun className='text-3xl text-[--text-icon-day-mode] ' />: <BsFillMoonStarsFill className='text-2xl text-[--text-icon-night-mode]' /> } 
    </button>
  );
}

export default NightModeFAB;
