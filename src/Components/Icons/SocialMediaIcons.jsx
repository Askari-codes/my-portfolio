import React, { useEffect } from 'react';
import { IconsData } from '../../Data/Data';
import { navigationConfig } from '../../Layout/layout';
import Icon from './Icon';
import clsx from 'clsx'

function SocialMediaIcons({ className, type }) {
  useEffect(() => {
    console.log('type', type);

  }, [type]);
  return (
    <div className={className}>
      {IconsData.map((item) => (
        <Icon
          className={clsx(
            'text-2xl  hover:text-[--text-social-media-hover] transition-colors duration-300"',
            { 'text-[--text-icon-social-media-sidebar]': type === navigationConfig.desktop },
            { 'text-[--text-icon-social-media-header]': type === navigationConfig.mobile }
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
