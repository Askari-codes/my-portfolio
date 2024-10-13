import React from 'react';
import { TiSocialLinkedin as linkedin, TiSocialGithub as github } from "react-icons/ti";

export const iconMap = {
    linkedin,
    github
}

const Icon = ({ name, className, href }) => {
    const IconComponent = iconMap[name];
    if (!IconComponent) {
        return null;
    }
    const iconElement = <IconComponent className={className} />;
    if (href) {
        return (
            <div className='relative group inline-block'>
                <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                    {iconElement}
                </a>
                <span className="absolute lg:bottom-full left-1/2  transform -translate-x-1/2 mt-2 lg:mb-2 w-max bg-[--background-icon-social-media-tooltip] text-[--text-icon-social-media-tooltip] text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {name}
                </span>
            </div>

        );
    }
    return iconElement;
}
export default Icon;
