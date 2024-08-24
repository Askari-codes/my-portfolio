import React from 'react';
import useAppContext from '../../hooks/useAppContext';
function AboutMe() {
    const { isOpen } = useAppContext()

    return (
        <h1 className={`page ${isOpen ? '' : 'opacity-90'}  `}>AboutMe</h1>
    );
}

export default AboutMe;