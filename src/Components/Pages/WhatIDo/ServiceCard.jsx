import React from 'react';
import Icon from './Icon';

function ServiceCard({ title, content, icon }) {
    return (
        <div className='grid gap-3 p-8    '>
            <div className='flex items-center gap-4 h-[50px]    '>
                <Icon icon={icon} />
                <div className='service-title xxs:text-[12px] xs:text-[18px]  text-[20px] md:text-[17px] xl:text-[20px] 2xl:text-[24px] text-[--color-text-secondary] font-semibold'>
                    {title}
                </div>
            </div>
            <div className='service-content  text-justify md:text-[15px] lg:text-[16px] 2xl:text-[18px] text-[--color-text-primary] leading-7  min-h-[150px]'>
                {content}
            </div>
        </div>
    );
}

export default ServiceCard;