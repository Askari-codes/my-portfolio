import React from 'react';
import Icon from './Icon';

function ServiceCard({ title, content, icon }) {
    return (
        <div className='grid gap-3 p-8 '>
            <div className='flex items-center gap-4    '>
                <Icon icon={icon} />
                <div className='service-title xxs:text-[12px] xs:text-[18px]  text-[20px] md:text-[17px] xl:text-[20px] 2xl:text-[24px] text-[--color-white] font-semibold'>
                    {title}
                </div>
            </div>
            <div className='service-content  text-justify md:text-[15px] lg:text-[16px] 2xl:text-[18px] text-[--color-page-content] leading-7'>
                {content}
            </div>
        </div>
    );
}

export default ServiceCard;