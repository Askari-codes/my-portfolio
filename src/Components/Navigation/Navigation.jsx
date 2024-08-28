import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menuItemsData } from '../../Data/Data';
import useAppContext from '../../hooks/useAppContext';

function Navigation({ type }) {

  const location = useLocation();
  const { closeMenu } = useAppContext();

  return (
    <div className={`${type === 'header' ? 'navigation-header' : 'navigation-sidebar'}`}>
      {menuItemsData.map((item, index) => {
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={index}
            to={item.path}
            className={`${type === 'header'
              ? `navigation-header-item ${isActive ? 'active' : ''} ${item.label === 'Contact' ? '' : 'border-b border-[var(--color-accent)]'}`
              : `navigation-sidebar-item ${isActive ? 'active ' : ''}`
              }`}
            onClick={closeMenu} 
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

export default Navigation;
