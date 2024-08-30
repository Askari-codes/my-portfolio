import React from 'react';
import useAppContext from '../../hooks/useAppContext';

function AboutMe() {
    const { isOpen } = useAppContext();

    return (
        <div className={` flex flex-col h-[500px] page bg-white opacity-90 text-red-500 `}>
            
            <h1 className="text-2xl font-bold mb-4 text-center">Know Me More</h1>
            <div className="w-24 h-1  mx-auto mb-4"></div> 
            <h2 className="text-xl font-semibold mb-4 text-center">I'm Mohammad Askari, a Frontend Developer</h2>
            
            <div className="flex flex-col  ">
                <p className="text-justify text-[20px] font-medium">
                    I specialize in creating visually appealing and user-friendly web interfaces. My goal is to help businesses
                    elevate their online presence through responsive and interactive designs. I began my journey as an intern for
                    six months, where I gained foundational skills, and then spent over two years at a leading company,
                    consistently delivering high-quality projects that exceeded expectations.
                    <br /><br />
                    I am committed to providing exceptional service and ensuring that every project I undertake is completed to the
                    highest standard. My experience as a frontend developer has equipped me with the skills to turn creative ideas
                    into functional and dynamic websites.
                </p>

                <div className="pt-4 mb-4 ">
                    <p className='mb-[6px]'><strong>Email:</strong> askari.fahlyani@gmail.com</p>
                    <p className='mb-[6px]'><strong>Age:</strong> 33</p>
                    <p className='mb-[6px]'><strong>From:</strong> Utrecht</p>
                    <p className='mb-[6px]'><strong>3+ Years of Experience</strong></p>
                    <p className='mb-[6px]'><strong>Name:</strong> Mohammad Askari</p>
                    <button className="bg-blue-500 text-white w-32 h-12 rounded">
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
