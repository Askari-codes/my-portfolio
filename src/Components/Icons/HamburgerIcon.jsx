import React from 'react';
import useAppContext from '../../hooks/useAppContext';

const HamburgerIcon = () => {

  const { isOpen, toggleMenu } = useAppContext()

  return (
    <button
      className="flex lg:hidden flex-col items-end text-[#FFFFFF]  justify-center w-[5%] opacity-95  rounded focus:outline-none  "
      onClick={() => toggleMenu(isOpen)}
    >
      <span
        className={`block  w-6 h-0.5 bg-white mb-1 transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''

          }`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-white mb-1 transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2 hidden' : ''
          }`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-white transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
      ></span>
    </button>

  );
}


export default HamburgerIcon;
