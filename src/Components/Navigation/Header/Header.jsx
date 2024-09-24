import React, { useEffect } from 'react';
import SocialMediaIcons from '../../Icons/SocialMediaIcons.jsx';
import HamburgerIcon from '../../Icons/HamburgerIcon.jsx';
import useAppContext from '../../../hooks/useAppContext.js';
import Navigation from '../Navigation.jsx';
import { Profile_Name } from '../../../Data/Data.js';

function Header({ type, isVisible }) {
  const { isOpen } = useAppContext();

  useEffect(() => {
    console.log('is Open is', isOpen);
  }, [isOpen]);

  return (
    <header
      className={`${!isVisible ? 'hidden' : ''} fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)] ${isOpen ? ' ' : 'h-16'}`}
    >
      <div className={`flex items-center justify-between w-full  px-4  ${isOpen?'py-3 ':'h-16'} `}>
        <h1 className="text-[15px] w-[50%] xs:text-lg md:text-xl text-[var(--color-blue-500)] opacity-95 poppins leading-none">
          {Profile_Name}
        </h1>
        <SocialMediaIcons className={'flex space-x-4 xxs:pr-2 justify-end w-[45%]'} />
        <HamburgerIcon />
      </div>
      
      {isOpen && (
        <div className="w-full"> {/* Remove padding or set it to 0 */}
          <Navigation type={type} />
        </div>
      )}
    </header>
  );
}

export default Header;
