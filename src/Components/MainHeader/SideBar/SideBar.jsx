import React from 'react';
import SocialMediaIcons from '../../Icons/SocialMediaIcons';
import myPhoto from '../../../tailwind/images/myPhoto.jpg';
import NavigationMenu from '../../Menu/NavigationMenu';
import { layoutConfig, navigationConfig } from '../../../Layout/layout';

const Sidebar = () => {
  return (
    <aside className="flex flex-col justify-between bg-gray-800 text-white w-64 h-full fixed lg:relative">
      <div className="my-8 flex flex-col items-center">
        <img
          src={myPhoto}
          alt="Mohammad Askari"
          className="w-36 h-36 rounded-full border-4 border-gray-500"
        />
        <div className="text-[20px] text-[#aab1b8] poppins-medium mt-1">
          Mohammad Askari
        </div>
      </div>
      <NavigationMenu
        type="sidebar"
        navigationPosition={navigationConfig.screen}
        isOpen={true}
      />
      <SocialMediaIcons direction={layoutConfig.sidebar} />
    </aside>
  );
};

export default Sidebar;
