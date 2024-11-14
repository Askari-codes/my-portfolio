import React from 'react';
import PageBackground from '../Shared/PageBackground';
import { portfolioContent } from '../../../Data/Data';

const Portfolio = () => {
    return (
        <div className="font-[poppins]  min-h-screen">
            <PageBackground 
                pageBackgroundTitle={portfolioContent.pageBackgroundTitle} 
            />
            <div className="flex justify-center items-center  py-12">
                <div className="bg-[--background-cards] p-6 rounded-lg shadow-lg w-full max-w-lg">
                    <h1 className="text-3xl text-[--text-title-card-portfolio] font-semibold mb-4">{portfolioContent.issueTrackerProject.title}</h1>
                    <p className=" text-justify mb-4 text-[--text-content-card-portfolio]">
                      {portfolioContent.issueTrackerProject.description}
                    </p>
                    <div className="text-[--text-github-label-card-portfolio] mb-6">
                       {portfolioContent.issueTrackerProject.github.lable}
                        <a 
                            href="https://github.com/Askari-codes/issue-tracker" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[--text-project-title-card-portfolio] hover:text-[--text-project-title-card-portfolio-hover] ml-2 "
                        >
                            {portfolioContent.issueTrackerProject.github.path}
                        </a>
                    </div>
                    <img 
                        className="rounded-md shadow-md object-cover w-full h-auto" 
                        src={portfolioContent.issueTrackerProject.image} 
                        alt="Issue Tracker Project" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
