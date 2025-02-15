import React from 'react';
import ResumeCard from './ResumeCard';

function ResumeSection({  items,date,company,role }) {
    return (
        <div className="mx-2  " >
           <div className=' flex justify-center'>
           <div className=' flex justify-between w-[80%] '>
            <h1 className="p-4 text-[--color-yellow-600]"> {company}</h1>
            <h1 className='p-4'> {role}</h1>
            <h1 className='p-4 text-[--color-gray-100]'> {date}</h1>
            </div>
           </div>
            <div className='flex flex-col' >
                
                {items.map((item, index) => (
                    <ResumeCard
                        key={index}
                        date={item.date}
                        title={item.title}
                        Content={item.content}
                        company={item.company}
                    />
                ))}
            </div>
        </div>
    );
}

export default ResumeSection;
