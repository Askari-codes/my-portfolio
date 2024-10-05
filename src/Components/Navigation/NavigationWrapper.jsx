import React, { useEffect } from 'react';
import Sidebar from './SideBar/SideBar';
import { navigationConfig } from '../../Layout/layout';
import useMediaQuery from '../../hooks/useMediaQuery';
import useAppContext from '../../hooks/useAppContext';
import Header from './Header/Header';

function NavigationWrapper({isVisible}) {
    const { closeMenu } = useAppContext()
    const isDesktop = useMediaQuery("(min-width: 1024px)");

    useEffect(() => {
        if (isDesktop) {
            closeMenu()
        }
    },[isDesktop, closeMenu])

    return (
        <div>
            {isDesktop ? <Sidebar isVisible={isVisible}  type={navigationConfig.desktop} /> : <Header  type={navigationConfig.mobile} isVisible={isVisible} />}
        </div>
    )
}

export default NavigationWrapper;