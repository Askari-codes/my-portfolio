import React from 'react';
import SocialMediaIcons from '../../Icons/SocialMediaIcons.jsx';
import HamburgerIcon from '../../Icons/HamburgerIcon.jsx';
import useAppContext from '../../../hooks/useAppContext.js';
import Navigation from '../Navigation.jsx';
import { Profile_Name } from '../../../Data/Data.js';
import clsx from 'clsx';
import NightModeFAB from '../../Icons/NightModeFAB.jsx'

function Header({ type, isVisible }) {
  const { isOpen } = useAppContext();

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 bg-[--background-application] ",
        { hidden: !isVisible },
        { 'bg-[--background-header] ': isOpen }
      )}
    >
      <div className={clsx(
        'flex items-center justify-between w-full px-4 ',
        { 'py-3 border-b-[1px]': isOpen },
        { 'h-16 ': !isOpen }
      )}>
        <h1 className={clsx(
          'text-[15px] w-[50%] xs:text-lg md:text-xl text-[--text-profile-name-header] opacity-95 poppins leading-none',
          { 'text-[var(--text-profile-name-header-open)]': isOpen }
        )}>
          {Profile_Name}
        </h1>
        <div className="flex  items-center space-x-4 w-[45%] justify-end">
          <SocialMediaIcons className={'flex space-x-2'} type={type} />
          <NightModeFAB type={type} />
          <button
            className="bg-transparent border-none text-xl cursor-pointer"
            aria-label="Toggle Night Mode"
          >
            <HamburgerIcon />
          </button>
        </div>
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
