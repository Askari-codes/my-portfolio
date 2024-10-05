import React from 'react';

function ResumeCard({ date, title, Content, company }) {
    return (
        <div className="p-4 mb-4 bg-[--background-cards] rounded lg:min-h-max">
            <span className="w-[100px] text-center font-medium text-[--text-dat-resume-card] rounded">
                {date}
            </span>
            <span className="flex items-center h-[35px] font-semibold text-[--text-company-card-resume] lg:font-medium">
                {company}
            </span>
            <div className="h-[30px] text-[16px] text-[--text-job-title-card-resume]">
                {title}
            </div>
            <p className="mt-4 text-justify text-[--text-content-card-resume]">
                {Content}
            </p>
        </div>
    );
}

export default ResumeCard;
