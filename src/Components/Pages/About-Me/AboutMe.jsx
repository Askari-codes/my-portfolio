import React from 'react';
import PersonalInformation from './PersonalInformation';
import { aboutMeContent, myPersonalInformation } from '../../../Data/Data';
import PageBackground from '../Shared/PageBackground';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

function AboutMe() {

    const handleDownload = () => {
        window.open(`${process.env.PUBLIC_URL}/resume.pdf`, '_blank');
    };

    return (
        <div className="relative z-0 w-full p-4 text-justify flex flex-col   overflow-hidden min-h-screen">
            <div className="relative flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 flex-grow min-h-full">
                <PageBackground pageBackgroundTitle={aboutMeContent.pageBackgroundTitle} pageTitle={aboutMeContent.pageTitle} />
                <div className="text-[3vw] min-h-[50vh] text-justify col-span-2 lg:text-[1.5rem] lg:flex lg:flex-col lg:justify-center lg:flex-grow lg:self-baseline">
                    <h2 className="text-[4vw] font-semibold mb-4 text-[--text-color-secondary] text-center lg:text-[2rem]">
                        I'm <span className="text-[--color-blue-200]">{aboutMeContent.myName}</span>, {aboutMeContent.myJob}
                    </h2>
                    <p className=' text-[--text-color-primary] text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] leading-[4vh] xs:leading-[5vh] sm:leading-[6vh]'>
                        {aboutMeContent.introduction.partOne}
                        <br />
                        {aboutMeContent.introduction.partTow}
                        <br/>
                        {aboutMeContent.partThree}
                    </p>
                </div>
                <div className="pt-4 col-span-2 lg:text-[1.5rem] lg:h-1/2 xl:h-[60%] 2xl:h-[70%] 3xl:h-full   flex flex-col justify-between lg:flex-grow lg:self-baseline">
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
                        className="flex items-center justify-center mt-8 max-w-[250px] lg:w-[320px] text-[12px] xs:text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] bg-[--color-blue-200] text-[--text-color-primary] rounded-lg py-3 px-6 shadow-lg hover:bg-[--color-blue-500] hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
                        <HiOutlineDocumentDownload className="mr-2 text-xl lg:text-2xl" />
                        Download CV
                    </button>
                </div>
            </div>
        </div>

    );
}

export default AboutMe;
