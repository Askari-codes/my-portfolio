import React from 'react';
import { IconsData } from '../../Data/Data.js'
import Icon from './Icon';
import { navigationConfig } from '../../Layout/layout.js';
function SocialMediaIcons({ type }) {

    return (
        <div className={`${type === navigationConfig.mobile ? 'flex lg:hidden justify-end w-[45%] mr-2' : 'lg:flex justify-center p-4 '}`}>
            {IconsData.map((item) => <Icon className='text-base xs:text-lg text-[--text-color-primary]  opacity-95 md:text-xl  m-1   ' key={item} name={item.name} href={item.href} />)}
        </div>
    );
}

export default SocialMediaIcons;