import React from 'react';
import background from '../Assets/Videos/background.mov';

const VideoBackground = () => {
  return (
    <div className="absolute inset-0 h-full w-full z-0 ">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={background}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default VideoBackground;

