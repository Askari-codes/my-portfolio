import React from 'react';
import useAppContext from '../../hooks/useAppContext';
function Resume() {
    const { isOpen, } = useAppContext()
    return (
        <h1 className={`page bg-white ${isOpen ? '' : 'opacity-90'}  `}>Resume</h1>
    );
}

export default Resume;