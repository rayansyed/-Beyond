import React, { useRef } from 'react';
import ReactPlayer from 'react-player'
import "./video.css"
import { useEffect } from "react";
import VideoFile from "../../videos/redvsyellow_comp.mp4"
const Video = ({videoURL, desc, icon}) => {


  return (
    <div className='video-wrapper'>
        {/* <ReactPlayer className='react-player' url={videoURL} playing={true} controls={false} muted={true} loop={true} width='100%' height='100%'/> */}
        <video className='video' autoPlay muted loop className="video" src={VideoFile} width="100%" height="100%"></video>

        {/* <video src={videoURL} width="100%" height="auto" preload='auto' autoPlay loop></video> */}
        <div className='video-texts'>
        <pre className='video-desc'>{desc}</pre>
            <img className='video-icon' height="100%" src={icon}></img> 
        </div>
    </div>
  );
}

export default Video;
