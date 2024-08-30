import React from 'react';
import SocialMediaIcons from '../../Icons/SocialMediaIcons';
import myPhoto from '../../../tailwind/images/myPhoto.jpg';
import Navigation from '../Navigation';
import { Profile_Name } from '../../../Data/Data';

const Sidebar = ({ type }) => {
  return (
    <aside className="fixed top-0 left-0 flex flex-col space-y-8 w-[250px] h-full bg-[var(--bg-sidebar)] z-10 overflow-auto">
      <div className="my-8 flex flex-col items-center">
        <img
          src={myPhoto}
          alt={Profile_Name}
          className="w-32 h-32 rounded-full"
        />
        <div className="text-[20px] text-[--text-color-primary] poppins-medium mt-1">
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
