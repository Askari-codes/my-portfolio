import React, { useEffect } from 'react';
import SocialMediaIcons from '../../Icons/SocialMediaIcons.jsx';
import HamburgerIcon from '../../Icons/HamburgerIcon.jsx';
import useAppContext from '../../../hooks/useAppContext.js';
import Navigation from '../Navigation.jsx';
import { Profile_Name } from '../../../Data/Data.js';
import clsx from 'clsx'

function Header({ type, isVisible }) {
  const { isOpen } = useAppContext();
  
  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)] ",
        { 'hidden': !isVisible },
      )}
    >
      <div className={clsx(
        'flex items-center justify-between w-full  px-4 ',
        { 'py-3': isOpen },
        { 'h-16': !isOpen }
      )}>
        <h1 className="text-[15px] w-[50%] xs:text-lg md:text-xl text-[var(--color-blue-500)] opacity-95 poppins leading-none">
          {Profile_Name}
        </h1>
        <SocialMediaIcons className={'flex space-x-4 xxs:pr-2 justify-end w-[45%]'} />
        <HamburgerIcon />
      </div>

      {isOpen && (
        <div className="w-full"> 
          <Navigation type={type} />
        </div>
      )}
    </header>
  );
}

export default Header;
