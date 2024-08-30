import React from 'react';
import { motion } from 'framer-motion';
import VideoBackground from '../VideoBackground';

const Home = () => {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.05,
                when: "beforeChildren",
            }
        },
    };

    const item = {
        firstLine: {
            initial: { opacity: 1 },
            exit: { opacity: 1 },
            hidden: { opacity: 1 },
            visible: {
                opacity: 1,
                y: 0,
            }
        },
        secondLine: {
            hidden: { opacity: 0.1 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 2,
                }
            }
        },
        thirdLine: {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 1,
                }
            }
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center h-screen w-full">
            <VideoBackground />
            <motion.div
                className="text-center xxs:text-[1.7rem] xs:text-[2rem] md:text-[2.5rem] xl:text-[3rem] font-bold text-[var(--color-accent)]"
                variants={container}
                initial='visible'
                animate='visible'
            >
                {Array.from("I'm Mohammad Askari").map((char, index) => (
                    <motion.span key={index} variants={item.firstLine}>
                        {char}
                    </motion.span>
                ))}
            </motion.div>
            <motion.div
                className="p-[0.5rem] xxs:text-[1.5rem] xs:text-[1.7rem] md:text-[2rem] xl:text-[2.5rem] text-center text-[var(--text-color-primary)]"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {Array.from("I'm a frontend developer").map((char, index) => (
                    <motion.span key={index} variants={item.secondLine}>
                        {char}
                    </motion.span>
                ))}
            </motion.div>
            <motion.div
                className="p-0.51rem xxs:text-[1rem] xs:text-[1.4rem] md:text-[1.5rem] xl:text-[2rem] text-center text-[var(--text-color-primary)]"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {Array.from("Crafting beautiful and functional web experiences").map((char, index) => (
                    <motion.span key={index} variants={item.thirdLine}>
                        {char}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
}

export default Home;
