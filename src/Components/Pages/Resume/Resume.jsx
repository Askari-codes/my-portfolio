import React from 'react';
import PageBackground from '../Shared/PageBackground';
import { resumeContent } from '../../../Data/Data';
import ResumeSection from './ResumeSection';
import Skills from './Skills';

function Resume() {

    return (
        <div className='bg-[--color-background] min-h-screen w-screen flex flex-col  font-poppins'>
           <div>
           <PageBackground pageBackgroundTitle={resumeContent.pageBackgroundTitle} pageTitle={resumeContent.pageTitle} />
           </div>
            <div className="experiences grid md:grid-cols-[1fr_1fr] min-h-screen   ">
                {resumeContent.sections.map((section,index) => <ResumeSection key={index} resumeTitle={section.title} items={section.items} />)}
            </div>
            <div className=''>
                <Skills/>
            </div>
        </div>
    );
}

export default Resume;