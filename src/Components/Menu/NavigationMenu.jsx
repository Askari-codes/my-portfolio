import React from 'react';
import {Link,useLocation} from 'react-router-dom'
import {menuItemsData} from '../../Data/Data'

function NavigationMenu({isOpen,handleNavigationItems,closeMenu}) {
  
  const location = useLocation()
  
  

  return (
    <div>
      <div
        className={`fixed left-0 w-full lg:w-[100%] bg-black z-50 transition-all duration-700 ease-in-out overflow-hidden mt-[10px]  ${
          isOpen?'auto' : 'h-0'
        }`}
        style={{ transitionProperty: 'height' }}
      >
        <div className="flex flex-col items-start justify-start h-full p-2">
          {menuItemsData.map((item, index) => {
            const isActive = location.pathname===item.path
            return(
              
            <Link
              key={index}
              to={item.path} 
              className={`block py-4 px-2 w-full text-xl text-[#aab1b8] ${isActive?'text-blue-500':'text-[#aab1b8]'} hover:bg-gray-700 ${item.label==='Contact'?'':'border-b'} border-gray-600`}              style={{ backgroundColor: 'black' }}
              onClick={() => {handleNavigationItems(false);
                if(closeMenu)closeMenu()
              }}
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

export default NavigationMenu;
