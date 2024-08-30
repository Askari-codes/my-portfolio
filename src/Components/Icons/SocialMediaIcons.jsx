import React, { useEffect } from 'react';
import { IconsData } from '../../Data/Data.js';
import Icon from './Icon';
import { navigationConfig } from '../../Layout/layout.js';

function SocialMediaIcons({ type }) {
    useEffect(()=>{
        console.log(type===navigationConfig.mobile);
        
    },[type])
    return (
        <div className={`flex  space-x-4 ${type === navigationConfig.mobile ? 'xxs:pr-2  justify-end w-[45%] ' : 'lg:flex w-full justify-center '} `}>
            {IconsData.map((item) => (
                <Icon
                    className="text-base xs:text-lg text-[--text-color-primary] opacity-95 md:text-xl"
                    key={item.name}
                    name={item.name}
                    href={item.href}
                />
            ))}
        </div>
    );
}

export default SocialMediaIcons;
