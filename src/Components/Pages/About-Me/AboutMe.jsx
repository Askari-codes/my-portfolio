import React from 'react';
import PersonalInformation from './PersonalInformation';
import { aboutMeExplains, myPersonalInformation } from '../../../Data/Data';

function AboutMe() {
   
    const handleDownload = () => {
        window.open(`${process.env.PUBLIC_URL}/resume.pdf`, '_blank');
    };

    return (
        <div className="relative z-0 w-full p-4 text-justify flex flex-col bg-[#233036] text-[var(--text-color-secondary)] overflow-hidden min-h-screen">
        <div className="relative flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 flex-grow min-h-full">
            <div className="relative flex justify-center items-center min-h-[20vh] lg:min-h-[30vh] lg:col-span-2">
                <div className="absolute inset-0 flex justify-center items-center opacity-10 text-[15vw] font-bold text-[#5A7D7C] lg:opacity-15 lg:text-[10rem]">
                    {aboutMeExplains.page_background_title}
                </div>
                <div>
                    <h1 className="relative z-10 text-[5vw] font-bold text-center lg:text-[2.5rem] after:block after:w-1/2 after:h-1 after:bg-[--color-highlight] after:mx-auto">
                        {aboutMeExplains.page_title}
                    </h1>
                </div>
            </div>
            <div className="text-[3vw] min-h-[50vh] text-justify lg:text-[1.5rem] lg:flex lg:flex-col lg:justify-center lg:flex-grow self-baseline">
                <h2 className="text-[4vw] font-semibold mb-4 text-center lg:text-[2rem]">
                    I'm <span className="text-[--color-highlight]">{aboutMeExplains.my_name}</span>, {aboutMeExplains.my_job}
                </h2>
                <p className='text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] leading-[4vh] xs:leading-[5vh] sm:leading-[6vh]'>
                    {aboutMeExplains.introduction.part_one}
                    <br />
                    {aboutMeExplains.introduction.part_two}
                </p>
            </div>
            <div className="pt-4 lg:text-[1.5rem] lg:h-1/2 xl:h-[60%] 2xl:h-[70%] 3xl:h-full   flex flex-col justify-between lg:flex-grow self-baseline">
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
