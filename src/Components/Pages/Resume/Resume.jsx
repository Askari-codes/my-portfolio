import React from 'react';
import PageBackground from '../Shared/PageBackground';
import { resumeContent } from '../../../Data/Data';
import ResumeCard from './ResumeCard';

function Resume() {
    return (
        <div className='bg-[var(--color-dark-slate)] h-full p-4 text-[var(--color-white)] font-poppins'>
            <PageBackground pageBackgroundTitle={resumeContent.pageBackgroundTitle} pageTitle={resumeContent.pageTitle} />
            <div className="experiences grid md:grid-cols-[1fr_1fr] gap-2">
                <div className='work '>
                    <h1 className='p-4'>{resumeContent.resumeTitle.myExperience}</h1>
                    {resumeContent.workExperiences.map(item => <ResumeCard date={item.date} title={item.title} Content={item.content} />)}
                </div>
                <div className='education '>
                    <h1 className='p-4'>{resumeContent.resumeTitle.myEdjucation}</h1>
                    {resumeContent.education.map(item => <ResumeCard date={item.date} title={item.title} Content={item.content} />)}
                </div>
            </div>
        </div>
    );
}

export default Resume;