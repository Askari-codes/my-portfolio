import React from 'react';
import SocialMediaIcons from '../../Icons/SocialMediaIcons.jsx';
import HamburgerIcon from '../../Icons/HamburgerIcon.jsx';
import useAppContext from '../../../hooks/useAppContext.js';
import Navigation from '../Navigation.jsx';
import { Profile_Name } from '../../../Data/Data.js';

function Header({ type }) {
  const { isOpen } = useAppContext();

  return (
    <header
      className={` bg-[var(--bg-header)] opacity-80 lg:hidden ${isOpen ? 'flex flex-col' : 'flex items-center justify-between'}`}
    >
      <div className="flex items-center justify-between w-full p-4">
        <h1 className="w-[50%] text-base xs:text-lg md:text-xl text-[var(--text-color-highlight)] opacity-95 poppins leading-none">
          {Profile_Name}
        </h1>
        <SocialMediaIcons type={type} />
        <HamburgerIcon />
      </div>
      {isOpen && (
        <div className="mt-4 w-full">
          <Navigation type={type} />
        </div>
      )}
    </header>
  );
}

export default Header;

