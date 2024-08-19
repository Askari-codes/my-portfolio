import React, { useState, useEffect } from 'react';
function Home() {
    useEffect(()=>{
console.log('im in home');
    },[])
    return (

        <div className='flex h-screen bg-white '>
            home
        </div>

    );
}

export default Home;