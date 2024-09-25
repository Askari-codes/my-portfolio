import React from 'react';

function ResumeCard({ date, title, Content, company }) {
    return (
        <div className="p-4 mb-4 bg-[--color-background-light] rounded lg:min-h-max">
            <span className="w-[100px] text-center font-medium text-[--color-text-primary] rounded">
                {date}
            </span>
            <span className="flex items-center h-[35px] font-semibold text-[--color-primary] lg:font-medium">
                {company}
            </span>
            <div className="h-[30px] text-[16px] text-[--color-text-secondary]">
                {title}
            </div>
            <p className="mt-4 text-justify text-[--color-text-primary]">
                {Content}
            </p>
        </div>
    );
}

export default ResumeCard;
