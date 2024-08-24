import React from 'react';
import useAppContext from '../../hooks/useAppContext';
function WhatIDo() {
    const { isOpen } = useAppContext()
    return (
        <h1 className={`page ${isOpen ? '' : 'opacity-90'}  `}>WhatIDo</h1>
    );
}

export default WhatIDo;