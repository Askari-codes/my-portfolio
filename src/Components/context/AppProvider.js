import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState('/');

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);
    const updatePath = (path) => setCurrentPath(path);

    return (
        <AppContext.Provider value={{ isOpen,setIsOpen, toggleMenu, closeMenu, updatePath }}>
            {children}  
        </AppContext.Provider>
    );
}

export default AppProvider;