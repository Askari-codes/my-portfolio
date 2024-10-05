import React from 'react';

const PageBackground = ({ pageBackgroundTitle }) => {
    return (
        <div className="relative flex items-center justify-center min-h-[22vh] lg:min-h-[30vh] opacity-70">
            <div className="absolute inset-0 flex items-center justify-center mt-10 font-bold text-[13vw] md:text-[9vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[8vw] 3xl:text-[7vw] text-[--text-page-title] opacity-15 lg:opacity-20">
                {pageBackgroundTitle}
            </div>
        </div>
    );
};

export default PageBackground;
