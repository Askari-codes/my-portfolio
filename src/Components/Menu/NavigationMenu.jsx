import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menuItemsData } from '../../Data/Data';
import useAppContext from '../../hooks/useAppContext';

function NavigationMenu({ type, handleNavigationItems, closeMenu }) {
  const location = useLocation();
  const {toggleMenu,isOpen} = useAppContext()
  useEffect(()=>{
    console.log(isOpen);
      },[isOpen])

  const isSidebar = type === 'sidebar';

  return (
    <div>
      {isSidebar ? (
        <div className="flex flex-col w-full items-center justify-start ">
          {menuItemsData.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={index}
                to={item.path}
                className={`flex justify-center w-full py-4 px-2 text-xl menu-item    ${
                  isActive ? 'active ' :''
                } `}
                onClick={() => {
                  console.log('Navigating to:', item.path);
                  if (handleNavigationItems) handleNavigationItems(false);
                  if (closeMenu) closeMenu();
                  toggleMenu(!isOpen)
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      ) : (
        <div
          className={`fixed left-0 w-full  transition-all duration-700 ease-in-out overflow-hidden mt-8  ${
            isOpen ? 'auto':'h-0'
          }`}
          style={{ transitionProperty: 'height' }}
        >
          <div className="flex flex-col w-full items-start justify-start   ">
            {menuItemsData.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`flex justify-start w-full p-4 text-xl opacity-95    ${
                    isActive ? 'text-[#FFFFFF] bg-[#008080] hover:bg-[#002B5C] hover:text-[#00FFFF]' :'text-[#00FFFF] bg-[#001F3F] hover:text-[#008080] opacity-95'
                  } ${
                    item.label === 'Contact' ? '' : 'border-b'
                  } border-gray-600`}
                  onClick={() => {
                    console.log('Navigating to:', item.path);
                    if (handleNavigationItems) handleNavigationItems(false);
                    if (closeMenu) closeMenu();
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavigationMenu;

