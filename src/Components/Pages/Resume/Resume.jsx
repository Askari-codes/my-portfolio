import React from 'react';
import PageBackground from '../Shared/PageBackground';
import { resumeContent } from '../../../Data/Data';
import ResumeSection from './ResumeSection';
import Skills from './Skills';

function Resume() {
    return (
       <div className='flex flex-col justify-center items-center'  >
         <div className=" mb-10  xl:w-[75%]flex flex-col   font-poppins">
            <div>
                <PageBackground pageBackgroundTitle={resumeContent.pageBackgroundTitle} pageTitle={resumeContent.pageTitle} />
            </div>
            <div className="p-2 text-[--text-resume-section-title]">
                {resumeContent.sections.map((section, index) => (
                    <ResumeSection key={index} resumeTitle={section.title} date={section.date} company={section.company} role={section.role}  items={section.items} />
                ))}
            </div>
            <div>
            </div>
        </div>
                <Skills />
       </div>
    );
}

export default Resume;
