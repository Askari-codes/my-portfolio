import React from 'react';

const HamburgerIcon = ({ isOpen, toggle }) => (
  
    <button
    className="flex lg:hidden flex-col items-end  justify-center w-[5%]  text-white rounded focus:outline-none  "
    onClick={toggle}
  >
    <span
      className={`block  w-6 h-0.5 bg-white mb-1 transform transition duration-300 ease-in-out ${
        isOpen ? 'rotate-45 translate-y-2' : ''
        
      }`}
    ></span>
    <span
      className={`block w-6 h-0.5 bg-white mb-1 transition duration-300 ease-in-out ${
        isOpen ? 'opacity-0' : ''
      }`}
    ></span>
    <span
      className={`block w-6 h-0.5 bg-white transition duration-300 ease-in-out ${
        isOpen ? '-rotate-45 -translate-y-2' : ''
      }`}
    ></span>
  </button>
  
);

export default HamburgerIcon;
