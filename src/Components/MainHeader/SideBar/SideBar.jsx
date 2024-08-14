import React from 'react';
import {menuItemsData} from '../../../Data/Data'
import { Link } from 'react-router-dom';
import SocialMediaIcons from '../../Icons/SocialMediaIcons';
import myPhoto from '../../../tailwind/images/myPhoto.jpg'
import { layoutConfig } from '../../../Layout/layout';


const Sidebar = () => {
    return (
        <aside className="hidden lg:flex flex-col items-center bg-gray-800 text-white w-64 h-full fixed">
            <div className="my-8 flex flex-col items-center">
                <img
                    src={myPhoto}
                    alt="Mohammad Askari"
                    className="w-40 h-40 rounded-full border-4 border-white"
                />
                <div className='text-[20px] poppins-medium mt-1'>Mohammad Askari</div>
            </div>
            <nav className="flex flex-col items-center w-full">
                {menuItemsData.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className="py-4 w-full text-center hover:bg-gray-700"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
            
            <SocialMediaIcons direction={layoutConfig.sidebar}/>
        </aside>
    );
};

export default Sidebar;
