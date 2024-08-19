import React, { useState, useEffect } from 'react';
import NavigationMenu from '../../Menu/NavigationMenu';
import SocialMediaIcons from '../../Icons/SocialMediaIcons';
import HamburgerIcon from '../../Menu/HamburgerIcon';
import { layoutConfig, navigationConfig } from '../../../Layout/layout';
import useMediaQuery from '../../../hooks/useMediaQuery';

function TopHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const handleNavigationItemClick = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isDesktop) {
      setIsOpen(false); // Close the menu if switching to desktop view
    }
  }, [isDesktop]);

  return (
    <header className={` z-10  flex items-center justify-between mi p-4  ${isDesktop ? 'hidden' : 'flex'}`}>
      <h1 className=" text-white w-[50%] text-base xs:text-lg md:text-xl poppins  leading-none">
        Mohammad Askari
      </h1>
      <SocialMediaIcons direction={layoutConfig.topHeader} />
      <HamburgerIcon isOpen={isOpen} toggle={toggleMenu} />
      {isOpen && (
        <NavigationMenu
          type="header"
          navigationPosition={navigationConfig.mobile}
          closeMenu={handleNavigationItemClick}
          handleNavigationItems={handleNavigationItemClick}
          isOpen={isOpen}
        />
      )}
    </header>
  );
}

export default TopHeader;
