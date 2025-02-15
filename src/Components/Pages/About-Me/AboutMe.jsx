import React from 'react';
import PersonalInformation from './PersonalInformation';
import { aboutMeContent, myPersonalInformation, RESUME_DOWNLOAD_URL } from '../../../Data/Data';
import PageBackground from '../Shared/PageBackground';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

function AboutMe() {
    const handleDownload = () => {
        window.open(RESUME_DOWNLOAD_URL, '_blank');
    };

    return (
        <div className='flex justify-center items-center'  >
            <div className=" w-[85%] xl:w-[75%]  relative flex flex-col  overflow-hidden  p-4 z-0 text-justify  font-poppins ">

<div className="relative flex flex-col flex-grow min-h-full lg:gap-4">
    <PageBackground pageBackgroundTitle={aboutMeContent.pageBackgroundTitle} pageTitle={aboutMeContent.pageTitle} />
    <div className="flex-grow flex flex-col justify-center self-baseline min-h-[50vh] col-span-2 text-[3vw] text-justify lg:text-[1.5rem]">
        <h2 className="text-center font-semibold mb-4 text-[--text-introduction-home] xxs:text-[3.5vw] xs:text-[4vw] lg:text-[2rem]">
            I'm <span className="text-[--text-highlight]">{aboutMeContent.myName}</span>, {aboutMeContent.myJob}
        </h2>
        <p className="leading-[4vh] xxs:text-[1rem] xs:text-[1.1rem] xs:leading-[5vh] sm:leading-[6vh] md:text-[1.2rem] lg:text-[1.4rem] text-[--text-content-about-me]">
            {aboutMeContent.introduction.partOne}
            <br />
            {aboutMeContent.introduction.partTwo}
            <br />
            {aboutMeContent.partThree}
        </p>
    </div>
    <div className="flex flex-col justify-between self-baseline flex-grow h-1/2 pt-4 col-span-2 lg:text-[1.5rem] xl:h-[60%] 2xl:h-[70%] 3xl:h-full">
        <div className="flex flex-col justify-between flex-grow">
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
            className="flex items-center justify-center max-w-[250px] lg:w-[320px] mt-8 py-3 px-6 text-[12px] xs:text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] bg-[--background-button] text-[--color-gray-900] font-medium rounded-lg shadow-lg hover:bg-[--background-button-hover] hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
        >
            <HiOutlineDocumentDownload className="mr-2 text-xl lg:text-2xl" />
            {aboutMeContent.buttonTitle}
        </button>
    </div>
</div>
</div>
        </div>
    );
}

export default AboutMe;
