import React, { useEffect } from 'react';
import {IconsData} from '../../Data/Data.js'
import Icon from './Icon';
function SocialMediaIcons({direction}) {
    useEffect(()=>{
        console.log(IconsData);
    },[])
    return (
        <div className={`hidden ${direction === 'horizontal' ? 'sm:flex lg:hidden justify-end w-[200px]' : 'lg:flex'}`}>
            {IconsData.map((item)=><Icon className='socialMediaIcon' key={item} name={item}/>)}
        </div>
      );
}

export default SocialMediaIcons;