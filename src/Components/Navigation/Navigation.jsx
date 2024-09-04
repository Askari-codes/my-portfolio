import React from 'react';
import { menuItemsData } from '../../Data/Data';
import useAppContext from '../../hooks/useAppContext';

function Navigation({ type }) {
  const { closeMenu,sectionRefs } = useAppContext();

  const handleLinkClick = (section) => {
    closeMenu();
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', `#${section}`);
  };

  return (
    <div className={`${type === 'header' ? 'navigation-header' : 'navigation-sidebar'}`}>
      {menuItemsData.map((item, index) => (
        <button
          key={index}
          className={`${type === 'header' ? `navigation-header-item  ${item.label === 'Contact' ? '' : 'border-b border-[var(--color-accent)]'}` : `navigation-sidebar-item `}`}
          onClick={(e) => handleLinkClick( item.path.replace('#', ''))}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default Navigation;
