import React from 'react';
import background from '../Assets/Videos/background.mov'


const VideoBackground = () => {
  return (
    <div className="absolute inset-0 h-full w-full  overflow-hidden">
      <video
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
        src={background}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default VideoBackground;
