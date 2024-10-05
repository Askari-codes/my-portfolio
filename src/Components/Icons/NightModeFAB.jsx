import React from 'react';
import { GiBarbedSun } from "react-icons/gi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import useAppContext from '../../hooks/useAppContext';
import clsx from 'clsx';
import {navigationConfig} from '../../Layout/layout'
import { useEffect } from "react";

function NightModeFAB({type}) {
  
  const {isDarkMode,setIsDarkMode} = useAppContext();
  const toggleNightMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  useEffect(() => {
    console.log('type',type);
    
  }, [type]);
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
