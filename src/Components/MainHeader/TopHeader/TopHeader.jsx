import React, { useState, useEffect } from 'react';
import HamburgerMenu from '../../Menu/HamburgerMenu';
import SocialMediaIcons from '../../Icons/SocialMediaIcons';
import { layoutConfig } from '../../../Layout/layout';
function TopHeader() {
    return ( 
        <header className='flex items-center justify-between p-2 h-[70px]   '>
            <h1 className='text-white w-3/5 pl-2  poppins-medium text-[20px]'>Mohammad Askari </h1>
             <SocialMediaIcons  direction={layoutConfig.topHeader}/>
           
            <HamburgerMenu/>
        </header>
     );
}

export default TopHeader;