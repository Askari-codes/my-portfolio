import React from 'react';
import { IconsData } from '../../Data/Data';
import { navigationConfig } from '../../Layout/layout';
import Icon from './Icon';
import clsx from 'clsx'
import useAppContext from '../../hooks/useAppContext';

function SocialMediaIcons({ className, type }) {
  const { isOpen } = useAppContext()

  return (
    <div className={className}>
      {IconsData.map((item) => (
        <Icon
          className={clsx(
            'text-2xl  hover:text-[--text-icon-social-media-hover] transition-colors duration-300"',
            { 'text-[--text-icon-social-media-sidebar]': type === navigationConfig.desktop },
            { 'text-[--text-icon-social-media-header-close-navigation] hover:text-[--text-icon-social-media-header-close-navigation-hover]': type === navigationConfig.mobile && !isOpen },
            { 'text-[--text-icon-social-media-header-open-navigation]  ': type === navigationConfig.mobile && isOpen }
          )}
          key={item.name}
          name={item.name}
          href={item.href}
        />
      ))}
    </div>
  );
}

export default SocialMediaIcons;
