import React from 'react';
function ResumeCard({ date, title, Content, company }) {
    return (
        <div className='mb-4 bg-[var(--color-soft-slate)] g:min-h-max p-4 rounded'>
            <span className="date p-1 w-[100px] text-center rounded bg-[var(--color-highlight)]">{date}</span>
            <span className='text-[var(--color-highlight)] font-semibold lg:font-medium  flex items-center h-[35px] '>{company}</span>
            <div className="job-title h-[30px]  text-[16px]   ">{title}</div>
            <p className="job-content text-justify mt-4 opacity-80 ">{Content}</p>
        </div>
    );
}

export default ResumeCard;