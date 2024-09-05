import React from 'react';
import PersonalInformation from './PersonalInformation';
import { aboutMeContent, myPersonalInformation } from '../../../Data/Data';
import PageBackground from '../Shared/PageBackground';

function AboutMe() {
   
    const handleDownload = () => {
        window.open(`${process.env.PUBLIC_URL}/resume.pdf`, '_blank');
    };

    return (
        <div className="relative z-0 w-full p-4 text-justify flex flex-col bg-[#2C373E] text-[var(--text-color-secondary)] overflow-hidden min-h-screen">
        <div className="relative flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 flex-grow min-h-full">
            <PageBackground pageBackgroundTitle={aboutMeContent.pageBackgroundTitle} pageTitle={aboutMeContent.pageTitle}/>
            <div className="text-[3vw] min-h-[50vh] text-justify lg:text-[1.5rem] lg:flex lg:flex-col lg:justify-center lg:flex-grow lg:self-baseline">
                <h2 className="text-[4vw] font-semibold mb-4 text-[--color-white] text-center lg:text-[2rem]">
                    I'm <span className="text-[--color-highlight]">{aboutMeContent.myName}</span>, {aboutMeContent.myJob}
                </h2>
                <p className=' text-[--color-page-content] text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] leading-[4vh] xs:leading-[5vh] sm:leading-[6vh]'>
                    {aboutMeContent.introduction.partOne}
                    <br />
                    {aboutMeContent.introduction.partTow}
                </p>
            </div>
            <div className="pt-4 lg:text-[1.5rem] lg:h-1/2 xl:h-[60%] 2xl:h-[70%] 3xl:h-full   flex flex-col justify-between lg:flex-grow lg:self-baseline">
                <div className="flex-grow flex flex-col justify-between   ">
                    {myPersonalInformation.map((info, index) => (
                        <PersonalInformation
                            key={index}
                            label={info.label}
                            value={info.value}
                        />
                    ))}
                </div>
                <button
                    onClick={handleDownload}
                    className="mt-8 w-[40%] lg:w-[200px] text-[12px] xs:text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] bg-[--color-highlight] text-white rounded p-2 px-[1rem] ">
                    Download CV
                </button>
            </div>
        </div>
    </div>
    
    );
}

export default AboutMe;
