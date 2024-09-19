import React, { useEffect } from 'react';
import SocialMediaIcons from '../../Icons/SocialMediaIcons.jsx';
import HamburgerIcon from '../../Icons/HamburgerIcon.jsx';
import useAppContext from '../../../hooks/useAppContext.js';
import Navigation from '../Navigation.jsx';
import { Profile_Name } from '../../../Data/Data.js';

function Header({ type }) {
  const { isOpen,isScrolled } = useAppContext();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 bg-[--bg-color-sidebar] ${isScrolled?'opacity-100':'opacity-50'}  ${isOpen ? 'flex flex-col' : 'flex items-center justify-between '}`}
    >
      <div className="flex items-center justify-between w-full p-4">
        <h1 className="text-[15px] w-[50%] xs:text-lg md:text-xl text-[var(--text-color-highlight)] opacity-95 poppins leading-none">
          {Profile_Name}
        </h1>
        <SocialMediaIcons  className={`flex  space-x-4  xxs:pr-2  justify-end w-[45%]  `} />
        <HamburgerIcon />
      </div>
      {isOpen && (
        
          <Navigation type={type} />
        
      )}
    </header>
  );
}

export default Header;


