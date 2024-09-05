import React from 'react';
import PageBackground from '../Shared/PageBackground';
import { whatIDoContent } from '../../../Data/Data'
import ServiceCard from './ServiceCard';
function WhatIDo() {


    return (
        <div className='bg-[#303a43] min-h-screen text-[var(--text-color-secondary)] font-[poppins]  '>
            <PageBackground pageBackgroundTitle={whatIDoContent.pageBackgroundTitle} pageTitle={whatIDoContent.pageTitle} />
            <div className=' grid md:grid-cols-2'>
            {whatIDoContent.services.map(item => <ServiceCard key={item.id} icon={item.icon} title={item.title} content={item.content} />)}
            </div>
        </div>
    );
}

export default WhatIDo;