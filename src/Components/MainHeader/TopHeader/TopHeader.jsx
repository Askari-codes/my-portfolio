import React, { useState, useEffect } from 'react';
import NavigationMenu from '../../Menu/NavigationMenu';
import SocialMediaIcons from '../../Icons/SocialMediaIcons';
import HamburgerIcon from '../../Menu/HamburgerIcon';
import { layoutConfig, navigationConfig } from '../../../Layout/layout';
import useMediaQuery from '../../../hooks/useMediaQuery';
import useAppContext from '../../../hooks/useAppContext';

function TopHeader() {
  // const [isOpen, setIsOpen] = useState(false);
  const {isOpen,toggleMenu} = useAppContext()
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const handleNavigationItemClick = () => {
    toggleMenu(false);
  };

   toggleMenu(!isOpen)

  useEffect(() => {
    if (isDesktop) {
      toggleMenu(false); 
    }
  }, [isDesktop]);

  return (
    <header className={` flex items-center justify-between p-4 bg-[#001F3F] opacity-95  ${isDesktop ? 'hidden' : 'flex'}`}>
      <h1 className=" w-[50%] text-base xs:text-lg md:text-xl text-[#00FFFF] opacity-95 poppins  leading-none">
        Mohammad Askari
      </h1>
      <SocialMediaIcons direction={layoutConfig.topHeader} />
      <HamburgerIcon isOpen={isOpen}  />
      {isOpen && (
        <NavigationMenu
          type="header"
          navigationPosition={navigationConfig.mobile}
          closeMenu={toggleMenu(false)}
          handleNavigationItems={handleNavigationItemClick}
          isOpen={isOpen}
        />
      )}
    </header>
  );
}

export default TopHeader;
