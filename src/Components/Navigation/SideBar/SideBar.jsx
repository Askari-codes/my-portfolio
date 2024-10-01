
import React from 'react';
import SocialMediaIcons from '../../Icons/SocialMediaIcons';
import myPicture6 from '../../../tailwind/images/myPicture6.png';
import Navigation from '../Navigation';
import { Profile_Name } from '../../../Data/Data';

const Sidebar = ({ type,isVisible }) => {
 
  return (
    <aside className={`${isVisible?'':'hidden'} fixed top-0 left-0 flex flex-col w-[250px] h-full bg-[--background-sidebar] z-10 overflow-auto`}>
    
      <div className="my-8 flex flex-col items-center">
        <img
          src={myPicture6}
          alt={Profile_Name}
          className="w-28 h-28 rounded-full border- border-[--border-image]"
        />
        <div className="text-xl text-[--text-profile-name-sidebar] font-semibold mt-4">
          {Profile_Name}
        </div>
      </div>

      <Navigation type={type} />
   
      <div className="mt-auto mb-8">
        <SocialMediaIcons
          itemSize="text-2xl"
          className="flex space-x-4 items-center justify-center "
          type={type}
        />
      </div>
    </aside>
  );
};

export default Sidebar;

