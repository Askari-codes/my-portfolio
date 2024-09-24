import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTextLine = ({ text, className, variant, initial }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.05,
            when: 'beforeChildren',
          },
        },
      }}
      initial={initial}
      animate="visible"
    >
      {Array.from(text).map((char, index) => (
        <motion.span key={index} variants={variant}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextLine;
