import React from 'react';
import Lottie from 'lottie-react';
import stars from './stars.json'
import frontend_animation from './frontend_animation.json'

const BackgroundAnimation = () => {
    return (
      <div className="absolute inset-0">
        <Lottie animationData={stars} loop={true} className="w-full h-full" />
      </div>
    );
  };
  
  export default BackgroundAnimation;
