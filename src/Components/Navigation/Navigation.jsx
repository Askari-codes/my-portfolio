import React from "react";
import { menuItemsData } from "../../Data/Data";
import useAppContext from "../../hooks/useAppContext";
import { navigationConfig } from "../../Layout/layout";
import { CONTACT_LABLE } from "../../Data/Data";
import clsx from 'clsx'

function Navigation({ type }) {

  const { closeMenu, sectionRefs, activeSection } = useAppContext();
  const scrollContainerRef = document.querySelector("main");

  const smoothScrollTo = (targetPosition, duration = 500) => {
    const startPosition = scrollContainerRef.scrollTop;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      scrollContainerRef.scrollTop = run;
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(timeElapsed, startValue, changeInValue, duration) {
      timeElapsed /= duration / 2;
      if (timeElapsed < 1) {
        return (changeInValue / 2) * timeElapsed * timeElapsed + startValue;
      }
      timeElapsed--;
      return (-changeInValue / 2) * (timeElapsed * (timeElapsed - 2) - 1) + startValue;
    }

    requestAnimationFrame(animation);
  };

  const handleLinkClick = (section) => {

    closeMenu();
    const targetPosition = sectionRefs[section]?.current?.offsetTop || 0;
    smoothScrollTo(targetPosition, 1000);
    window.history.pushState(null, "", `#${section}`);
  };

  return (
    <nav className={clsx(
      {
        'mt-0': type === navigationConfig.mobile,
        'mt-10  h-1/2 flex flex-col justify-evenly flex-wrap': type !== navigationConfig.mobile
      }
    )}>
      {menuItemsData.map((item, index) => (
        <button
          key={index}
          className={clsx(
            'w-full text-lg text-[--text-item-sidebar] xxs:text-[1rem] md:text-[1.1rem]  transition-colors duration-300',
            {
              'font-bold  text-[--color-text-primary] hover:bg-[--background-item-sidebar-hover] transition-colors duration-500 delay-400 ': activeSection === item.path.replace("#", ""),
              ' hover:text-[--text-item-sidebar-hover] font-medium hover:font-semibold ': activeSection !== item.path.replace("#", "")
            },
            {
              'flex px-4 py-2 bg-[--background-application] text-[--text-item-sidebar] font-semibold  ': type === navigationConfig.mobile
            },
            {'flex justify-center p-4 border-none':type===navigationConfig.desktop},
            {
              'border-[1px]': item.label !== CONTACT_LABLE
            }
          )}
          onClick={() => handleLinkClick(item.path.replace("#", ""))}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

export default Navigation;
