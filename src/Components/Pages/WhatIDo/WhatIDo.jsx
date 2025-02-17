import React from 'react';
import PageBackground from '../Shared/PageBackground';
import { whatIDoContent } from '../../../Data/Data';
import ServiceCard from './ServiceCard';

function WhatIDo() {
    return (
        <div className='flex justify-center items-center'  >
            <div className=" w-[85%] xl:w-[75%] font-[poppins]">
            <PageBackground 
                pageBackgroundTitle={whatIDoContent.pageBackgroundTitle} 
                pageTitle={whatIDoContent.pageTitle} 
            />
            <div className="grid md:grid-cols-2 gap-4">
                {whatIDoContent.services.map(item => (
                    <ServiceCard 
                        key={item.id} 
                        icon={item.icon} 
                        title={item.title} 
                        content={item.content} 
                    />
                ))}
            </div>
        </div>
        </div>
    );
}

export default WhatIDo;
