import React from 'react';
import "./video.css"

const Video = ({videoPath, desc, icon}) => {
  return (
    <div className='video-wrapper'>
        {/* <ReactPlayer className='react-player' url={videoURL} playing={true} controls={false} muted={true} loop={true} width='100%' height='100%'/> */}
        <video className='video' autoPlay muted playsInline loop src={videoPath} width="100%" height="100%"></video>

        {/* <video src={videoURL} width="100%" height="auto" preload='auto' autoPlay loop></video> */}
        <div className='video-texts'>
        <pre className='video-desc'>{desc}</pre>
            <img className='video-icon' height="100%" src={icon}></img> 
        </div>
    </div>
  );
}

export default Video;
