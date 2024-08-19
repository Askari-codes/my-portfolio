import React, { useEffect } from 'react';
import {IconsData} from '../../Data/Data.js'
import Icon from './Icon';
function SocialMediaIcons({direction}) {
    useEffect(()=>{
        console.log(IconsData);
    },[])
    return (
        <div className={` ${direction === 'horizontal' ? 'flex lg:hidden justify-end w-[45%] mr-2  '  : 'lg:flex justify-center p-4'}`}>
            {IconsData.map((item)=><Icon className='text-base xs:text-lg md:text-xl text-[#aab1b8] m-2   ' key={item} name={item}/>)}
        </div>
      );
}

export default SocialMediaIcons;