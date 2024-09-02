import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { menuItemsData } from '../../Data/Data';
import useAppContext from '../../hooks/useAppContext';

function Navigation({ type }) {

  // const location = useLocation();
  const { closeMenu } = useAppContext();
  const linkHandler = (e)=>{
    closeMenu()
    // e.preventDefault()
  }
  return (
    <div className={`${type === 'header' ? 'navigation-header' : 'navigation-sidebar'}`}>
      {menuItemsData.map((item, index) => {
        // const isActive = location.pathname === item.path;

        return (
          <a
            key={index}
            href={item.path}
            className={`${type === 'header'
              ? `navigation-header-item  ${item.label === 'Contact' ? '' : 'border-b border-[var(--color-accent)]'}`
              : `navigation-sidebar-item `
              }`}
            onClick={linkHandler} 
          >
            {item.label}
          </a>
        );
      })}
    </div>
  );
}

export default Navigation;
