import React from 'react';

const PageBackground = ({pageBackgroundTitle,pageTitle}) => {
    return (
        <div className="relative flex justify-center items-center min-h-[22vh] lg:min-h-[30vh] lg:col-span-2">
        <div className="absolute inset-0 flex justify-center items-center opacity-10 text-[15vw] font-bold tx text-[--color-primary-light] lg:opacity-15 lg:text-[10rem]">
            {pageBackgroundTitle}
        </div>
        <div>
            <h1 className="relative z-10 text-[5vw] text-[--color-accent] font-bold text-center lg:text-[2.5rem] after:block after:w-1/2 after:h-1 after:bg-[] after:mx-auto">
                {pageTitle}
            </h1>
        </div>
    </div>
    );
};

export default PageBackground;