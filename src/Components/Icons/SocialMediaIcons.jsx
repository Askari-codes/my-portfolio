// SocialMediaIcons.jsx
import React from 'react';
import { IconsData } from '../../Data/Data';
import Icon from './Icon';

function SocialMediaIcons({ className }) {
  return (
    <div className={className}>
      {IconsData.map((item) => (
        <Icon
          className="text-2xl text-[var(--color-blue-500)] hover:text-gray-200 transition-colors duration-300"
          key={item.name}
          name={item.name}
          href={item.href}
        />
      ))}
    </div>
  );
}

export default SocialMediaIcons;
