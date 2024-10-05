import React from 'react';
import SocialMediaIcons from '../../Icons/SocialMediaIcons';
import Navigation from '../Navigation';
import NightModeFAB from '../../Icons/NightModeFAB'
import { Profile_Name } from '../../../Data/Data';
import clsx from 'clsx'

const Sidebar = ({ type, isVisible }) => {

  return (
    <aside className={clsx(
      'fixed top-0 left-0 flex flex-col overflow-x-hidden w-[250px] h-full bg-[--background-sidebar] z-10 overflow-auto',
      { 'hidden': !isVisible }
    )} >
      <NightModeFAB type={type} />
      <div className="my-8 flex flex-col items-center h-1/6">
        <img
          src='images/myPicture6.png'
          alt={Profile_Name}
          className="w-28 h-28 rounded-full border- border-[--border-image]"
        />
        <div className="text-xl text-[--text-profile-name-sidebar] font-semibold mt-4">
          {Profile_Name}
        </div>
      </div>
      <Navigation type={type} />
      <div className="mt-auto mb-8 h-1/6  flex flex-col justify-center items-center space-y-4">
        <button
          className="bg-transparent border-none text-2xl cursor-pointer"
          aria-label="Toggle Night Mode"
        >
        </button>
        <SocialMediaIcons
          itemSize="text-2xl"
          className="flex space-x-4 h-full items-end justify-center"
          type={type}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
