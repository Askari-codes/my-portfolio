import React, { useState, useEffect } from 'react';
import useAppContext from '../../hooks/useAppContext';

function Home() {
    const { isOpen, } = useAppContext()
    return (
        <div className={`page ${isOpen ? '' : 'opacity-90'}  `}
        >
            this is home
        </div>

    );
}

export default Home;