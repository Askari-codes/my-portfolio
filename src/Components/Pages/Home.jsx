import React, { useState, useEffect } from 'react';
import useAppContext from '../../hooks/useAppContext';

function Home() {
    const {isOpen,closeMenu} =useAppContext()
   const onClicklHandler = ()=>{
    closeMenu()
   }
   
    return (

        <div className={`flex h-screen text-xl text-white text-y ${isOpen?'':'opacity-90'}  `}
        onClick={onClicklHandler}
        >
            this is home
        </div>

    );
}

export default Home;