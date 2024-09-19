import React from 'react';

const PageBackground = ({ pageBackgroundTitle, pageTitle }) => {
    return (
        <div className="relative flex justify-center items-center min-h-[22vh] lg:min-h-[30vh] mt-10 lg:mt-0  opacity-70">
            {/* Background Title */}
            <div className="absolute inset-0 flex justify-center items-center text-[13vw] lg:text-[11vw] font-bold text-[--color-blue-200] opacity-15 lg:opacity-20">
                {pageBackgroundTitle}
            </div>
            
            {/* Main Title */}
            <div>
                {/* <h1 className="relative z-10 text-[5vw] lg:text-[2.5rem] text-[#445a65] font-bold text-center">
                    {pageTitle}
                </h1> */}
            </div>
        </div>
    );
};

export default PageBackground;
