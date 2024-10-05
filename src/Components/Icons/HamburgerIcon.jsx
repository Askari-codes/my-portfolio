import React from 'react';
import useAppContext from '../../hooks/useAppContext';
import { RxHamburgerMenu } from "react-icons/rx";

const HamburgerIcon = () => {
  const { isOpen, toggleMenu } = useAppContext()

  return (
    <button
      className="flex xxs:pl-2 lg:hidden w-[5%] h-full cursor-pointer  h-f flex-col items-center opacity-95 rounded focus:outline-none"
      onClick={() => toggleMenu(isOpen)}
    >
      <RxHamburgerMenu className='text-[--text-hamburger-icon] text-[1.5rem]' />
    </button>
  );
}
export default HamburgerIcon;
