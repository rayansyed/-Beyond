import React from 'react';
import "./wallpaper.css"
import MarqueeText from '../marqueeText/MarqueeText';
const Wallpaper = ({background, game, time, studio, release, platform}) => {
  return (
    <div className='wallpaper'>
          <video className='video-background' playsInline autoPlay muted loop src={background} ></video>
          <div className='m-container'>
            <MarqueeText game={game} time={time} studio={studio} release={release} platform={platform}/>
          </div>
    </div>
    );
}



export default Wallpaper;
