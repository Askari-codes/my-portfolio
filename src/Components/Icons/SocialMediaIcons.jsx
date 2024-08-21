import React, { useEffect } from 'react';
import {IconsData} from '../../Data/Data.js'
import Icon from './Icon';
function SocialMediaIcons({direction}) {
    useEffect(()=>{
        console.log(IconsData);
    },[])
    return (
        <div className={` ${direction === 'horizontal' ? 'flex lg:hidden justify-end w-[45%] mr-2  '  : 'lg:flex justify-center p-4 text-[#00FFFF]'}`}>
            {IconsData.map((item)=><Icon className='text-base xs:text-lg text-[#D3D3D3]  opacity-95 md:text-xl  m-2   ' key={item} name={item}/>)}
        </div>
      );
}

export default SocialMediaIcons;