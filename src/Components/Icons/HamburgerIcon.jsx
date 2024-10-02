import React from 'react';
import useAppContext from '../../hooks/useAppContext';
import clsx from 'clsx'

const HamburgerIcon = () => {

  const { isOpen, toggleMenu } = useAppContext()

  return (
    <button
      className="flex xxs:pl-2 lg:hidden w-[5%] h-f flex-col items-center opacity-95 rounded focus:outline-none"
      onClick={() => toggleMenu(isOpen)}
    >
      <span
        className={clsx(
          'block w-6 h-0.5 bg-[--background-hamburger-icon] mb-1 transform transition duration-300 ease-in-out',
          {'rotate-45 translate-y-2 bg-[var(--background-hamburger-icon-open)]':isOpen}
        )}
        
      ></span>
      <span
        className={`block w-6 h-0.5 bg-[--background-hamburger-icon] mb-1 transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}
      ></span>
      <span
       className={clsx(
        'block w-6 h-0.5 bg-[--background-hamburger-icon] mb-1 transform transition duration-300 ease-in-out',
        {'-rotate-45 -translate-y-2 bg-[var(--background-hamburger-icon-open)]':isOpen}
      )}
      ></span>
    </button>
);

}


export default HamburgerIcon;
