import React from 'react';
import "./wallpaperImage.css"
import MarqueeText from '../marqueeText/MarqueeText';
const WallpaperImage = ({background, game, time, studio, release, platform}) => {
  return (
    <div className='wallpaper'>
          <img className='img-background' src={background}/>
          <div className='m-container'>
            <MarqueeText game={game} time={time} studio={studio} release={release} platform={platform}/>
          </div>
    </div>
    );
}



export default WallpaperImage;
