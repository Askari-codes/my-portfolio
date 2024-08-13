import React, { useState, useEffect } from 'react';
import {Link,useLocation} from 'react-router-dom'
import {menuItemsData} from '../../Data/Data'
import HamburgerIcon from './HamburgerIcon';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation()
  useEffect(()=>{
    menuItemsData.forEach(item=>(`${item.path==location.pathname?console.log(item.path):console.log('nothing')}`))
  },[])

  return (
    <div>
      <HamburgerIcon isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

      <div
        className={`fixed left-0 w-full bg-black z-50 transition-all duration-700 ease-in-out overflow-hidden  ${
          isOpen ? 'auto' : 'h-0'
        }`}
        style={{ transitionProperty: 'height' }}
      >
        <div className="flex flex-col items-start justify-start h-full p-2">
          {menuItemsData.map((item, index) => {
            const isActive = location.pathname===item.path
            return(
              
            <Link
              key={index}
              to={item.path}  // Use the path from menuItemsData
              className={`block py-4 px-2 w-full text-xl ${isActive?'text-blue-500':'text-white'} hover:bg-gray-700 ${item.label==='Contact'?'':'border-b'} border-gray-600`}              style={{ backgroundColor: 'black' }}
              onClick={() => setIsOpen(false)}  // Optionally close menu on click
            >
              {item.label}
            </Link>
            )
})}
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
