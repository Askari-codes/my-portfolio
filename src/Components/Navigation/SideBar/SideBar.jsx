import React from 'react';
import SocialMediaIcons from '../../Icons/SocialMediaIcons';
import myPhoto from '../../../tailwind/images/myPhoto.jpg';
import Navigation from '../Navigation';
import { Profile_Name } from '../../../Data/Data';

const Sidebar = ({ type }) => {

  return (
    <aside className="hidden lg:sidebar lg:flex flex-col justify-between w-64 h-full fixed lg:relative">
      <div className="my-8 flex flex-col items-center">
        <img
          src={myPhoto}
          alt={Profile_Name}
          className="w-36 h-36 rounded-full border-4 border-[#3f8c8c]"
        />
        <div className="text-[20px] text-[#1fa1a1] poppins-medium mt-1">
          {Profile_Name}
        </div>
      </div>
      <Navigation
        type={type}
        navigationPosition={type}
        isOpen={true}
      />
      <SocialMediaIcons type={type} />
    </aside>
  );
};

export default Sidebar;
