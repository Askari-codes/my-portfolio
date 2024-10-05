import React from 'react';
import VideoBackground from '../../VideoBackground';
import Lottie from 'lottie-react';
import narrowIcon from '../../../Assets/animations/narrowIcon.json';
import narrowIconYellow from '../../../Assets/animations/narrowIconYellow.json'
import useAppContext from '../../../hooks/useAppContext';
import { homeContent } from '../../../Data/Data';
import AnimatedTextLine from './AnimatedTextLine';

const Home = () => {
    const { sectionRefs, scrollContainerRef, isDarkMode } = useAppContext();

    const handleClick = () => {
        if (
            sectionRefs.aboutMe &&
            sectionRefs.aboutMe.current &&
            scrollContainerRef &&
            scrollContainerRef.current
        ) {
            scrollContainerRef.current.scrollTo({
                top: sectionRefs.aboutMe.current.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="relative grid items-center w-full h-screen grid-rows-[10fr,2fr]">
            <VideoBackground />
            <div>
                {homeContent.textItems.map((item, index) => (
                    <AnimatedTextLine
                        key={index}
                        text={item.text}
                        className={item.className}
                        variant={item.variant}
                        initial={item.initial}
                    />
                ))}
            </div>
            <div className="flex flex-col items-center justify-center opacity-95">
                <AnimatedTextLine
                    text={homeContent.buttonSection.text}
                    className={homeContent.buttonSection.className}
                    variant={homeContent.buttonSection.variant}
                    initial={homeContent.buttonSection.initial}
                />
                <button
                    onClick={handleClick}
                >
                    <Lottie
                        animationData={isDarkMode ? narrowIconYellow : narrowIcon}
                        loop={true}
                        style={{ width: 100, height: 100 }}
                    />
                </button>
            </div>
        </div>
    );
}

export default Home;
