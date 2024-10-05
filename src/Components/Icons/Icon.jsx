import React from 'react';
import { TiSocialFacebook as facebook, TiSocialTwitter as twitter, TiSocialLinkedin as linkedin, TiSocialGithub as github } from "react-icons/ti";

export const iconMap = {
    facebook,
    twitter,
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
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {iconElement}
            </a>
        );
    }
    return iconElement;
}
export default Icon;
