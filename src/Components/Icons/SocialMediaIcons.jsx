import React, { useEffect } from 'react';
import {IconsData} from '../../Data/Data.js'
import Icon from './Icon';
function SocialMediaIcons({direction}) {
    useEffect(()=>{
        console.log(IconsData);
    },[])
    return (
        <div className={`hidden ${direction === 'horizontal' ? 'sm:flex lg:hidden justify-end w-[200px]' : 'lg:flex'}`}>
            {IconsData.map((item)=><Icon className='text-[1.5rem] text-[#aab1b8] mr-[12px] mb-[1rem]' key={item} name={item}/>)}
        </div>
      );
}

export default SocialMediaIcons;