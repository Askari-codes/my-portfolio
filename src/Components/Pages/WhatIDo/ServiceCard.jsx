import React from 'react';
import Icon from './Icon';

function ServiceCard({ title, content, icon }) {
    return (
        <div className="grid gap-3 p-8">
            <div className="flex items-center gap-4 h-[50px]">
                <Icon icon={icon} />
                <div className="text-[20px] font-semibold text-[--text-title-service] xxs:text-[12px] xs:text-[18px] md:text-[17px] xl:text-[20px] 2xl:text-[24px] service-title">
                    {title}
                </div>
            </div>
            <div className="min-h-[150px] text-justify leading-7 text-[--color-text-primary] md:text-[15px] lg:text-[16px] 2xl:text-[18px] service-content">
                {content}
            </div>
        </div>
    );
}

export default ServiceCard;
