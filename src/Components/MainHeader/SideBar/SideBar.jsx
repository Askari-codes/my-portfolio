import React from 'react';
import {menuItemsData} from '../../../Data/Data'
import { Link } from 'react-router-dom';
import SocialMediaIcons from '../../Icons/SocialMediaIcons';
import myPhoto from '../../../tailwind/images/myPhoto.jpg'
import myPicture from '../../../tailwind/images/myPicture.jpg'
import { layoutConfig,navigationConfig } from '../../../Layout/layout';
import NavigationMenu from '../../Menu/NavigationMenu';


const Sidebar = () => {
    return (
        <aside className="hidden lg:flex flex-col items-center justify-between bg-gray-800 text-white w-64 h-full fixed">
            <div className="my-8 flex flex-col items-center">
                <img
                    src={myPhoto}
                    alt="Mohammad Askari"
                    className="w-36 h-36 rounded-full border-4 border-gray-500 "
                />
                <div className='text-[20px] text-[#aab1b8] poppins-medium mt-1'>Mohammad Askari</div>
            </div>
            <nav className="flex flex-col items-center w-full">
                {/* {menuItemsData.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className="py-4 w-full text-center text-[#aab1b8] poppins-medium hover:bg-gray-700"
                    >
                        {item.label}
                    </Link>
                ))} */}
                <NavigationMenu isOpen={true} />
            </nav>
            
            <SocialMediaIcons direction={layoutConfig.sidebar}/>
        </aside>
    );
};

export default Sidebar;
