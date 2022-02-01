import React from 'react';
import "./wallpaper.css"
import Background from "../../videos/valhalla_cover.mp4"
import MarqueeText from '../marqueeText/MarqueeText';
function Wallpaper() {
  return (
  <div className='wallpaper'>
        <video className='video-background' autoPlay muted loop src={Background} ></video>
        <div className='m-container'>
          <MarqueeText/>
        </div>
  </div>
  );
}

export default Wallpaper;
