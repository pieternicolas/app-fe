import React from 'react';

import bgVid from 'Assets/video/bg.mp4';

const BackgroundVideo = (props) => {
  return (
    <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
      <source src={bgVid} type="video/mp4"/>
    </video>
  )
}

export default BackgroundVideo;