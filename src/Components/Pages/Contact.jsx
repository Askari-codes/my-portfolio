import React from 'react';
import useAppContext from '../../hooks/useAppContext';
function Contact() {
    const { isOpen } = useAppContext()
    return (
        <h1 className={`page ${isOpen ? '' : 'opacity-90'}  `}>Contact</h1>
    );
}

export default Contact;