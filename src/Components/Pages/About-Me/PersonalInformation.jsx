import React from 'react';
import { My_Email, EMAIL_LABEL } from '../../../Data/Data';

const PersonalInformation = ({ label, value }) => {
    return (
        <code className="mb-2 border-information text-[18px] text-[--text-personal-information-about-me] md:text-[20px] lg:text-[25px] xl:text-[30px]">
            <strong>
                {label}:
            </strong>
            {label === EMAIL_LABEL ? (
                <a
                    href={`mailto:${My_Email}`}
                    className="text-[--text-my-email] xxs:text-[1.1rem] xs:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem] font-semibold">
                    {value}
                </a>
            ) : (
                value
            )}
        </code>
    );
};

export default PersonalInformation;
