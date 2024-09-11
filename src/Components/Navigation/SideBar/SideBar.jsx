import React from 'react';
import SocialMediaIcons from '../../Icons/SocialMediaIcons';
import myPicture6 from '../../../tailwind/images/myPicture6.png'
import Navigation from '../Navigation';
import { Profile_Name } from '../../../Data/Data';

const Sidebar = ({ type }) => {
  return (
    <aside className="fixed top-0 left-0 flex flex-col w-[250px] h-full min-h-full bg-[#24303A]  z-10 overflow-auto">
      <div className="my-8 flex flex-col items-center h-[20%] justify-center">
        <img
          src={myPicture6}
          alt={Profile_Name}
          className=" w-28 h-28"
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
