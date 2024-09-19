import React from 'react';
import { My_Email } from '../../../Data/Data';
const PersonalInformation = ({ label, value }) => {
    return (
        <code className="mb-2 text-[--text-color-secondary] border-information text-[14px] sm:text-[16px] md:text-[20px] lg:text-[25px] xl:text-[30px]">
        <strong >{label}:</strong> {label === 'Email' ? <a href={`mailto:${My_Email}`} className='text-[--color-blue-200] text-[1rem]'>{value}</a> : value}
    </code>
    
    );
};
export default PersonalInformation