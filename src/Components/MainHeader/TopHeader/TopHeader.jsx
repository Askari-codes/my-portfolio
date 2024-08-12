import React, { useState, useEffect } from 'react';
import HamburgerMenu from '../../Menu/HamburgerMenu';
import SocialMediaIcons from '../../Icons/SocialMediaIcons';
function TopHeader() {
    return ( 
        <header className='flex items-center justify-between p-2 h-[70px]   '>
            <h1 className='text-white w-3/5 pl-2  poppins-medium'>Mohammad Askari </h1>
             <SocialMediaIcons/>
           
            <HamburgerMenu/>
        </header>
     );
}

export default TopHeader;