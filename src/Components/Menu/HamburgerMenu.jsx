import React, { useState } from 'react';
import MenuItem from './MenuItem';
import {menuItemsData} from '../../Data/Data'
import HamburgerIcon from './HamburgerIcon';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <HamburgerIcon isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

      <div
        className={`fixed left-0 w-full bg-black z-50 transition-all duration-700 ease-in-out overflow-hidden ${
          isOpen ? 'auto' : 'h-0'
        }`}
        style={{ transitionProperty: 'height' }}
      >
        <div className="flex flex-col items-start justify-start h-full p-2">
          {menuItemsData.map((item, index) => (
            <MenuItem key={index} label={item.label} href={item.href} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
