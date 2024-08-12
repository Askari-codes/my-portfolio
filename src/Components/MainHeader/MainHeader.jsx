import React, { useState, useEffect } from 'react';
import TopHeader from './TopHeader/TopHeader';
import IntroSection from './IntroSection/Introsection';
function MainHeader() {
    return ( 
        <div className='flex flex-col h-screen'>
            <TopHeader/>
            <IntroSection/>
        </div>
     );
}

export default MainHeader;