import React from 'react';

const HamburgerIcon = ({ isOpen, toggle }) => (
  <button
    className="flex flex-col items-center justify-center w-10 h-10 text-white rounded focus:outline-none mr-2"
    onClick={toggle}
  >
    <span
      className={`block w-6 md:w-8 h-0.5 md:h-1 bg-white mb-1 transform transition duration-300 ease-in-out ${
        isOpen ? 'rotate-45 translate-y-2' : ''
      }`}
    ></span>
    <span
      className={`block w-6 md:w-8 h-0.5 md:h-1 bg-white mb-1 transition duration-300 ease-in-out ${
        isOpen ? 'opacity-0' : ''
      }`}
    ></span>
    <span
      className={`block w-6 md:w-8 h-0.5 md:h-1 bg-white transition duration-300 ease-in-out ${
        isOpen ? '-rotate-45 -translate-y-2' : ''
      }`}
    ></span>
  </button>
);

export default HamburgerIcon;
