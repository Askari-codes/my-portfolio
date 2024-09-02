import React, { useEffect } from 'react';
import useAppContext from '../../../hooks/useAppContext';
import useMediaQuery from '../../../hooks/useMediaQuery';
import PersonalInformation from './PersonalInformation';
import { myPersonalInformation } from '../../../Data/Data';

function AboutMe() {
    const { isOpen } = useAppContext();
    const isMd = useMediaQuery("(min-width:768px)")

    useEffect(() => {
        console.log('isMd', isMd);
    }, [isMd])


    return (
        <div className="relative z-0 w-full p-4 text-justify flex flex-col justify-center bg-[#233036] text-[var(--text-color-secondary)] overflow-hidden">
            <h1 className="absolute xxs:top-[-0.5rem] xs:top-[-1.5rem] sm:top-[-2rem] md:top-[-3rem] left-0 right-0 flex justify-center opacity-10 text-[15vw] m-[2rem] font-bold text-[#5A7D7C]">
                About Me
            </h1>
            <div className="relative z-10">
                <h1 className="text-[5vw] font-bold mt-8  text-center">Know Me More</h1>
                <div className="w-24 h-1 bg-[--color-highlight] mx-auto mb-12"></div>
                <h2 className="text-[4vw]  font-semibold mb-4 text-center">I'm <span className='text-[--color-highlight]'>Mohammad Askari</span>, a Frontend Developer</h2>

                <div className="text-[3vw]  text-justify flex flex-col h-full w-full">
                    <p>
                        I specialize in creating visually appealing and user-friendly web interfaces. My goal is to help businesses
                        elevate their online presence through responsive and interactive designs. I began my journey as an intern for
                        six months, where I gained foundational skills, and then spent over two years at a leading company,
                        consistently delivering high-quality projects that exceeded expectations.
                        <br /><br />
                        I am committed to providing exceptional service and ensuring that every project I undertake is completed to the
                        highest standard. My experience as a frontend developer has equipped me with the skills to turn creative ideas
                        into functional and dynamic websites.
                    </p>

                    <div className="pt-4 mb-4 text-left">
                            {myPersonalInformation.map((info, index) => {
        return (
            <PersonalInformation 
                key={index} 
                label={info.label} 
                value={info.value} 
            />
        );
    })}

                        <button className=" flex justify-center items-center bg-[--color-highlight] text-white  rounded text-[2.5vw] py-[2vw] px-[4vw] ">
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
