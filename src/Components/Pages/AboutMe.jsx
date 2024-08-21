import React from 'react';
import useAppContext from '../../hooks/useAppContext';
function AboutMe() {
    const {isOpen} =useAppContext()
    
    return (  
        <h1 className={`${isOpen?'opacity-0':'opacity-90'}flex h-screen pointer-events-none text-white`}>AboutMe</h1>
    );
}

export default AboutMe;