import React, { useEffect } from 'react';
import { TiSocialFacebook as facebook, TiSocialTwitter as twitter, TiSocialLinkedin as linkedin, TiSocialGithub as github } from "react-icons/ti";

const iconMap = {
    facebook,
    twitter,
    linkedin,
    github
}
const Icon = ({ name,className }) => {
    const IconComponent = iconMap[name]
    useEffect(()=>{
        console.log(IconComponent);
    },[])

    if (!IconComponent) {
        console.log('no icon found');
        return null;
    }

    return <IconComponent className={className} />
}

export default Icon;