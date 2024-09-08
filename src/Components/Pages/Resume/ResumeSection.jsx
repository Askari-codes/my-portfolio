import React from 'react';
import ResumeCard from './ResumeCard';
function ResumeSection({resumeTitle,items}) {
    return (
        <div className='mx-2'>
            <h1 className='p-4'>{resumeTitle}</h1>
            <div className='grid grid-rows-[1fr_1fr_1fr]'>
            {items.map((item,index) => <ResumeCard key={index} date={item.date} title={item.title} Content={item.content} company={item.company} />)}
            </div>
        </div>
    );
}

export default ResumeSection;