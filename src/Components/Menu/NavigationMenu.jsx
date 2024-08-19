import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menuItemsData } from '../../Data/Data';

function NavigationMenu({ type, isOpen, handleNavigationItems, closeMenu }) {
  const location = useLocation();

  const isSidebar = type === 'sidebar';

  useEffect(() => {
    console.log('Current Path:', location.pathname);
  }, [location]);

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
                className={`flex justify-center w-full py-4 px-2 text-xl ${
                  isActive ? 'text-blue-500 bg-slate-900' : 'text-[#aab1b8]'
                }`}
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
      ) : (
        <div
          className={`fixed left-0 w-full z-50 transition-all duration-700 ease-in-out overflow-hidden mt-[10px] ${
            isOpen ? 'auto' : 'h-0'
          }`}
          style={{ transitionProperty: 'height' }}
        >
          <div className="flex flex-col w-full items-start justify-start p-2 bg-black">
            {menuItemsData.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`flex justify-start w-full py-4 px-2 text-xl ${
                    isActive ? 'text-blue-500 bg-slate-900' : 'text-[#aab1b8]'
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

