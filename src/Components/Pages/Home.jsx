import React from 'react';
import { motion } from 'framer-motion';

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
      fristLine : {
        hidden: { opacity: 0.6 },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1.5,
            transition: {
                repeat: Infinity,            
                repeatType: "reverse", 
                duration: 0.5,         
            }
        }
      },
      secondLine : {
        hidden: { opacity: 0.3 },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1.5,
            transition: {
                repeat: Infinity,            
                repeatType: "reverse", 
                duration: 0.5,         
            }
        }
      },
      thirdLine : {
        hidden: { opacity: 0.1 },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1.5,
            transition: {
                repeat: Infinity,            
                repeatType: "reverse", 
                duration: 0.5,         
            }
        }
      }
    };

    return (
        <div className="flex flex-col justify-center items-center h-full w-full"> 
            <motion.div
                className=" xxs:text-3xl xs:text-4xl md:text-5xl xl:text-6xl font-bold text-center text-[var(--color-accent)]"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {Array.from("I'm Mohammad Askari").map((char, index) => (
                    <motion.span key={index} variants={item.fristLine}>
                        {char}
                    </motion.span>
                ))}
            </motion.div>
            <motion.div
                className=" xxs:text-2xl xs:text-3xl md:text-4xl xl:text-5xl text-center text-3xl  text-[var(--text-color-primary)]"
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
                className=" xxs:text-xl xs:text-2xl md:text-3xl xl:text-4xl text-center text-2xl  text-[var(--text-color-primary)]"
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

