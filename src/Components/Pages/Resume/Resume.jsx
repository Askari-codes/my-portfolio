import React from 'react';
import PageBackground from '../Shared/PageBackground';
import { resumeContent } from '../../../Data/Data';
import ResumeSection from './ResumeSection';
import Skills from './Skills';

function Resume() {
    return (
        <div className="flex flex-col w-full  font-poppins">
            <div>
                <PageBackground pageBackgroundTitle={resumeContent.pageBackgroundTitle} pageTitle={resumeContent.pageTitle} />
            </div>
            <div className="grid p-2  md:grid-cols-[1fr_1fr] gap-4 text-[--text-resume-section-title]">
                {resumeContent.sections.map((section, index) => (
                    <ResumeSection key={index} resumeTitle={section.title} items={section.items} />
                ))}
            </div>
            <div>
                <Skills />
            </div>
        </div>
    );
}

export default Resume;
