import React from 'react';
import useAppContext from '../../hooks/useAppContext';
function Testimonial() {
    const { isOpen } = useAppContext()
    return (
        <h1 className={`page ${isOpen ? '' : 'opacity-90'}  `}>Testimonial</h1>
    );
}

export default Testimonial;