import React, { useState, useEffect } from 'react';
import NavigationMenu from '../../Menu/NavigationMenu';
import SocialMediaIcons from '../../Icons/SocialMediaIcons';
import HamburgerIcon from '../../Menu/HamburgerIcon';
import { layoutConfig} from '../../../Layout/layout';
import useMediaQuery from '../../../hooks/useMediaQuery';
function TopHeader() {
    const [isOpen,setIsOpen] = useState(false)
    const isDesktop = useMediaQuery('(min-width: 1024px)')
   
    const isNavigationItemclicked = (bool)=>{
        setIsOpen(bool)
    }
    const closeMenu =()=>{
        setIsOpen(false)
    }
    useEffect(()=>{
        if(isDesktop){
            closeMenu()
        }
    },[isDesktop])
    return ( 
        <header className='flex items-center justify-between p-2 h-[70px]   '>
            <h1 className='text-white w-3/5 pl-2  poppins-medium text-[20px] leading-none"'>Mohammad Askari </h1>
             <SocialMediaIcons  direction={layoutConfig.topHeader}/>
             <HamburgerIcon isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
            <NavigationMenu closeMenu={closeMenu} handleNavigationItems={isNavigationItemclicked} isOpen={isOpen} />
        </header>
     );
}

export default TopHeader;