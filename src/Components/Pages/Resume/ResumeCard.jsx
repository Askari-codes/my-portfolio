import React from 'react';
function ResumeCard({ date, title, Content, company }) {
    return (
        <div className='mb-4 bg-[--color-accent]   g:min-h-max p-4 rounded'>
            <span className="date  w-[100px] text-center rounded text-[--color-text-primary]   font-medium ">{date}</span>
            <span className=' text-[--color-primary] font-semibold lg:font-medium  flex items-center h-[35px]  '>{company}</span>
            <div className="job-title h-[30px]  text-[16px] text-[--color-text-secondary]    ">{title}</div>
            <p className="job-content text-justify mt-4  text-[--color-text-primary] ">{Content}</p>
        </div>
    );
}

export default ResumeCard;