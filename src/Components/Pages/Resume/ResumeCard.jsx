import React from 'react';

function ResumeCard({  Content }) {
    return (
        <div className='flex justify-center '>
            <div className="  p-4   rounded  w-[80%]      ">
            <p className=" font-medium  text-justify text-[--text-content-card-resume]">
                {Content}
            </p>
        </div>
        </div>
    );
}

export default ResumeCard;
