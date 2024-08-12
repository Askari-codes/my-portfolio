import React, { useEffect } from 'react';
import {IconsData} from '../../Data/Data.js'
import Icon from './Icon';
function SocialMediaIcons() {
    useEffect(()=>{
        console.log(IconsData);
    },[])
    return (
        <div className='hidden sm:flex justify-end w-[200px]' >
            {IconsData.map((item)=><Icon className='socialMediaIcon' key={item} name={item}/>)}
        </div>
      );
}

export default SocialMediaIcons;