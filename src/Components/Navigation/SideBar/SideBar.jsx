import React from 'react';
import SocialMediaIcons from '../../Icons/SocialMediaIcons';
import myPhoto from '../../../tailwind/images/myPhoto.jpg';
import Navigation from '../Navigation';
import { Profile_Name } from '../../../Data/Data';

const Sidebar = ({ type }) => {

  return (
    <aside className="hidden opacity-85 lg:sidebar lg:flex flex-col justify-between w-64 h-full fixed lg:relative">
      <div className="my-8 flex flex-col items-center">
        <img
          src={myPhoto}
          alt={Profile_Name}
          className="w-32 h-32 rounded-full  "
        />
        <div className="text-[20px]  text-[--text-color-primary] poppins-medium mt-1">
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
