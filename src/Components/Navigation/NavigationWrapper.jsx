import React, { useEffect } from 'react';
import Sidebar from './SideBar/SideBar';

import { navigationConfig } from '../../Layout/layout';
import useMediaQuery from '../../hooks/useMediaQuery';
import useAppContext from '../../hooks/useAppContext';
import Header from './Header/Header';

function NavigationWrapper() {
    const { closeMenu } = useAppContext()
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    useEffect(() => {
        console.log(isDesktop);
        
    }, [isDesktop]);

    useEffect(() => {
        if (isDesktop) {
            closeMenu()
        }
    }, [isDesktop])

    return (
        <div>
            {isDesktop ? <Sidebar  type={navigationConfig.desktop} /> : <Header  type={navigationConfig.mobile} />}
        </div>
    )
}

export default NavigationWrapper;