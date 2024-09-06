import React from 'react';
function ResumeCard({ date, title, Content }) {
    return (
        <div className='mb-4 flex flex-col  bg-black md:h-[440px] lg:min-h-max p-4 rounded'>
            <span className="date p-1   rounded bg-[var(--color-highlight)]">{date}</span>
            <div className="job-title h-[35px]  text-[16px]  mt-3 ">{title}</div>
            <p className="job-content text-justify h-[100%] flex flex-col  justify-around opacity-80 leading-7">{Content}</p>
        </div>
    );
}

export default ResumeCard;